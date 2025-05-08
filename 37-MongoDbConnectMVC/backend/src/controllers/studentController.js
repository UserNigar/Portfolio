import students from "../models/studentModel.js";

export const createStudent = async (req, res) => {
    try {
        const { name, surname, age } = req.body;

        if (!name || !surname || !age) {
            return res.status(400).send({ message: "Bütün sahələr tələb olunur" });
        }

        const newStudent = new students({ name, surname, age });

        await newStudent.save();

        res.status(201).send({
            message: "Tələbə uğurla yaradildi",
            data: newStudent,
        });
    } catch (error) {
        res.status(500).send("server error")
    }
}

export const getAllStudents = async (req, res) => {
    try {
        const allStudents = await students.find();
        res.status(200).send({
            message: "Bütün tələbələr uğurla gətirildi",
            data: allStudents,
        });
    } catch (error) {
        res.status(500).send({ message: "Server xətası" });
    }
};


export const getStudentsById = async (req, res) => {
    const { id } = req.params;

    try {
        const findStudent = await students.findById(id);

        if (!findStudent) {
            return res.status(404).send({ message: "Tələbə tapılmadı" });
        }

        res.status(200).send({
            message: "Tələbə uğurla tapıldı",
            data: findStudent,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server xətası" });
    }
};

export const deleteStudent = async (req, res) => {
    const { id } = req.params;

    try {
        const findStudent = await students.findByIdAndDelete(id);

        if (!findStudent) {
            return res.status(404).send({ message: "Tələbə tapılmadı" });
        }

        res.status(200).send({
            message: "Tələbə uğurla silindi",
            data: findStudent,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server xətası" });
    }
};

export const updateStudent = async (req, res) => {
    const { id } = req.params;
    const { name, surname, age } = req.body;

    if (!name || !surname || !age) {
        return res.status(400).send({ message: "Bütün sahələr doldurulmalıdır" });
    }

    try {
        const updated = await students.findByIdAndUpdate(
            id,
            { name, surname, age },
            { new: true }
        );

        if (!updated) {
            return res.status(404).send({ message: "Tələbə tapilmadi" });
        }

        res.status(200).send({
            message: "Tələbə yeniləndi",
            data: updated,
        });
    } catch (err) {
        res.status(500).send({ message: "Server xətasi" });
    }
};



export const patchStudent = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const updated = await students.findByIdAndUpdate(id, updates, { new: true });

        if (!updated) {
            return res.status(404).send({ message: "Tələbə tapılmadı" });
        }

        res.status(200).send({
            message: "Tələbə qismən yeniləndi",
            data: updated,
        });
    } catch (err) {
        res.status(500).send({ message: "Server xətası" });
    }
};
