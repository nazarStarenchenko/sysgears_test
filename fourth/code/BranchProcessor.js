class BranchProcessor {
	constructor(questions) {
		this._questions = questions;	
		this._result = [];

	}

	_getAllBranches() {
		const traverse = (question, currentBranch) => {
			if (!question) {
			  result.push([...currentBranch]);
			  return;
			}
		
			for (const answer of question.answers) {
			  const nextQuestion = this._questions.find(q => q.id === answer.nextQuestionID);
			  currentBranch.push({ [question.questionText]: answer.answer });
		
			  traverse(nextQuestion, currentBranch);
		
			  currentBranch.pop();
			}
		  }
		
		  const result = [];
		  traverse(this._questions[0], []);
		
		  return result;
	}

	getFormattedResult() {
		const allBranches = this._getAllBranches();
		return {paths: {"number": allBranches.length, "list": allBranches}}
	}
}

module.exports = BranchProcessor;