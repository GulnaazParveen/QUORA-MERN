import { question } from "../models/Question.js";
import { answer } from "../models/Answer.js";

class quora {
  // static getalldata = async (req, res) => {
  //   try {
  //     const result = await question.find();
  //     console.log(result);
  //     res.status(200).send(result);
  //   } catch (error) {
  //     console.log(error);
  //     res.status(500).send({ status: false, message: "Error fetching data" });
  //   }
  // };

  static question = async (req, res) => {
    try {
      const result = await question.aggregate([
        {
          $lookup: {
            from: "answers",
            localField: "_id",
            foreignField: "questionId",
            as: "allAnswers",
          },
        },
      ]);
      res.status(200).send(result);
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ status: false, message: "Unable to get the question details" });
    }
  };

  static questionCreated = async (req, res) => {
    try {
      await question.create({
        questionName: req.body.questionName,
        questionUrl: req.body.questionUrl,
        user: req.body.user,
      });
      res
        .status(201)
        .send({ status: true, message: "Question added successfully" });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send({ status: false, message: "Error while adding question" });
    }
  };

  static answer = async (req, res) => {
    try {
      await answer.create({
        answer: req.body.answer,
        questionId: req.body.questionId,
        user: req.body.user,
      });
      res
        .status(201)
        .send({ status: true, message: "Answer added successfully" });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send({ status: false, message: "Error while adding answer" });
    }
  };
}

export default quora;
