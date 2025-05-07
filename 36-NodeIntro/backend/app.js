import express from "express";
import fs from "fs"

const app = express();
const port=4000;
app.use(express.json());


let {students}=JSON.parse(fs.readFileSync("db.json"))



app.get("/", (req,res)=>{
    res.send("okey")
})

app.get("/api/students",(req,res)=>{
    try {
        res.status(200).send({message:"sucses" , data:students})
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
        
    }
})

app.get("/api/students/:id",(req,res)=>{
    let {id}=req.params;

    try {
        let findUser=students.find((student)=>student.id == id)
        if (!findUser) {
            res.status(404).send({message:"student is not found"})
            
        } 
        res.status(200).send({message:"succsess" ,data:findUser})
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
        
    }
})


app.delete("/api/students/:id",(req,res)=>{
    let {id}=req.params;

    try {
        let studentIndex=students.findIndex((student)=>student.id==id)

        if (studentIndex !==-1) {
            students.splice(studentIndex ,1)       
        }
        fs.writeFileSync("db.json", JSON.stringify({students}))
        res.status(200).send({message:"student deleted succsess", data:students})
        
    } catch (error) {
        res.status(500).send({message:"Internal server error"})
    }

})



app.post("/api/students", (req, res) => {
    try {
        let newStudent = req.body;

        if (!newStudent) {
            return res.status(400).send({ message: "student not found" });
        }

        students.push({ id: Date.now(), ...newStudent });
        fs.writeFileSync("db.json", JSON.stringify({ students }));
        res.status(200).send({ message: "sucses", data: newStudent });

    } catch (error) {
        res.status(500).send({ message: "Internal server error" });
    }
});

app.put("/api/students/:id", (req, res) => {
    const id = req.params.id;
    const newData = req.body;

    try {
        const studentIndex = students.findIndex(student => student.id == id);

        if (studentIndex === -1) {
            res.status(404).send({ message: "Student tapılmadı" });
            return;
        }

        const updatedStudent = {
            id: Number(id),
            name: newData.name,
            age: newData.age
        };

        students[studentIndex] = updatedStudent;

        fs.writeFileSync("db.json", JSON.stringify({ students }));

        res.status(200).send({ message: "Tələbə tam yeniləndi", data: updatedStudent });

    } catch (error) {
        res.status(500).send({ message: "Server xətası" });
    }
});

app.patch("/api/students/:id", (req, res) => {
    const id = req.params.id;
    const newData = req.body;

    try {
        const student = students.find(student => student.id == id);

        if (!student) {
            res.status(404).send({ message: "Student tapılmadı" });
            return;
        }

        if (newData.name !== undefined) {
            student.name = newData.name;
        }

        if (newData.age !== undefined) {
            student.age = newData.age;
        }

        fs.writeFileSync("db.json", JSON.stringify({ students }));

        res.status(200).send({ message: "Tələbə qismən yeniləndi", data: student });

    } catch (error) {
        res.status(500).send({ message: "Server xətası" });
    }
});


app.listen(port,()=>{
    console.log("server is up");
    
})