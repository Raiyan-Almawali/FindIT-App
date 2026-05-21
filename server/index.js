import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import UserModel from "./models/Users.js";
import CompanyModel from "./models/Companys.js";
import JobModel from "./models/jobs.js";


const app = express();
app.use(cors());
app.use(express.json());

app.listen(3002, () => {
    console.log("Server Connected at port no 3002");
})

//FindITDB
const conStr = "mongodb+srv://admin:admin123@cluster1.ieiqj1e.mongodb.net/FindITDB?appName=PostITApp-Cluster1";
mongoose.connect(conStr)
    .then(() => { console.log("Database Connected..") })
    .catch((error) => { console.log("Database Connection Error.." + error) });


    // http://localhost:3002/getUsers
app.get("/getUsers", async (req, res) => {
    try {
        const users = await UserModel.find({});
        res.send(users);
    }
    catch (error) {
        res.send("Read Error.." + error)
    }
});


// http://localhost:3002/getCompanyes
app.get("/getCompanyes", async (req, res) => {
    try {
        const companies = await CompanyModel.find({});
        res.send(companies);
    }
    catch (error) {
        res.send("Read Error.." + error)
    }
});


// http://localhost:3002/personRegister

app.post("/personRegister", async (req, res) => {
    try {
        const {email,password,fullname,phonenumber} = req.body;
        const existingPerson = await UserModel.findOne({ email:email });
        if (existingPerson)
            res.send({ message: "User Already Exists" });
        else {
            const hpwd = await bcrypt.hash(password, 10);
            const newPerson = new UserModel({email,password:hpwd,fullname,phonenumber});
            newPerson.save();
            res.send({ message: "Person Registered Successfully" });
        }
    } catch (error) {
        res.send("Read Error.." + error);
    }
});

// Company Register
app.post("/companyAdd", async (req, res) => {
    try {
        const {compemail,cpassword,companyname,cphone,complocation} = req.body;
        const existingCompany = await CompanyModel.findOne({ compemail:compemail });
        if (existingCompany)
            res.send({ message: "Company Already Exists" });
        else {
            const hpwd = await bcrypt.hash(cpassword, 10);
            const newCompany = new CompanyModel({ compemail,cpassword:hpwd,companyname,cphone,complocation});
            newCompany.save();
            res.send({ message: "Company Registered Successfully" });
        }
    } catch (error) {
        res.send("Read Error.." + error);
    }
});


app.post("/personLogin", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email:email });

        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match)
                res.send({ user: user, message: "success" });
            else
                res.send({ message: "Invalid Credentials" });
        } else {
            res.send({ message: "Invalid Credentials" });
        }

    } catch (error) {
        res.send("Login Error: " + error);
    }
});



app.post("/companyLogin", async (req, res) => {
    try {
        const {compemail,cpassword} = req.body;
        const company = await CompanyModel.findOne({ compemail:compemail });

        if (company) {
            const match = await bcrypt.compare(cpassword, company.cpassword);
            if (match)
                res.send({ company: company, message: "success" });
            else
                res.send({ message: "Invalid Credentials" });
        } else {
            res.send({ message: "Invalid Credentials" });
        }

    } catch (error) {
        res.send("Login Error: " + error);
    }
});




app.post("/postjob", async (req, res) => {
    try {
        const newjob = new JobModel(req.body);
         newjob.save();
        res.send({ message: "job Posted" });
    }
    catch (error) {
        res.send("Read Error.." + error)
    }
})



app.get("/getJobs", async (req, res) => {
    try {
        const jobssWithCompay = await JobModel.aggregate([
            {
                $lookup: {
                    from: "CompanyTbl",
                    localField: "compemail",
                    foreignField: "compemail",
                    as: "company"
                }
            },
            {
                $sort: { createdAt: -1 }
            },
            {
                "$project": { "company.cpassword": 0, "company.compemail": 0 }
            }
        ]);
        res.send({ jobs: jobssWithCompay })
    }
    catch (error) {
        res.send("Read Error.." + error)
    }
});



// http://localhost:3002/getCompanyJobs?compemail=...
app.get("/getCompanyJobs", async (req, res) => {
    try {
        const { compemail } = req.query;
        const jobs = await JobModel.find({ compemail }).sort({ createdAt: -1 });
        res.send({ jobs });
    } catch (error) {
        res.status(500).send("Read Error.." + error);
    }
});

app.delete("/deleteJob/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const del = await JobModel.findOneAndDelete({
            _id: id
        });

        if (del)
            res.send("Job Deleted");
        else
            res.send("Job Not Deleted");
    }
    catch (error) {
        res.send("Delete Error..." + error);
    }
});

app.put("/updateJob/:id", async (req, res) => {

    try {
        const id = req.params.id;
        const update = await JobModel.findOneAndUpdate(
            { _id: id },
            req.body,
            { new: true }
        );
        if (update)
            res.send({
                message: "Job Updated",
                job: update
            });
        else
            res.send("Job Not Updated");
    }
    catch (error) {
        res.send("Update Error..." + error);
    }
});


app.put("/changeCompanyPassword", async (req, res) => {
    try {
        const { _id, oldPassword, newPassword } = req.body;
 
        const company = await CompanyModel.findById(_id);
        if (!company)
            return res.send({ message: "Company not found" });
 
        const match = await bcrypt.compare(oldPassword, company.cpassword);
        if (!match)
            return res.send({ message: "Current password is incorrect" });
 
        const hashed = await bcrypt.hash(newPassword, 10);
        await CompanyModel.findByIdAndUpdate(_id, { cpassword: hashed });
 
        res.send({ message: "success" });
 
    } catch (error) {
        res.send({ message: "Error: " + error });
    }
});











