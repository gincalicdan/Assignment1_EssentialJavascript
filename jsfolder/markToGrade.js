function markToGrade() {
    const markInput = document.getElementById("mark").value;
    const validationMessage = document.getElementById("msg");
    const gradeResult = document.getElementById("grade");

    validationMessage.innerHTML = "";
    gradeResult.innerHTML = "";

    try {
        // Convert the input to a number
        const mark = parseInt(markInput);

        // Check if the mark is a number
        if (isNaN(mark)) {
            throw new Error("Invalid input. Please enter a number.");
        }

        // Check if the mark is nonnegative and less than 101
        if (mark < 0 || mark > 100) {
            throw new Error("Invalid mark. Please enter a non-negative value less than 101.");
        }

        // Determine the grade based on the mark
        if (mark > 90) {
            gradeResult.innerHTML = "Grade A";
        } else if (mark > 80) {
            gradeResult.innerHTML = "Grade B";
        } else if (mark > 70) {
            gradeResult.innerHTML = "Grade C";
        } else if (mark > 50) {
            gradeResult.innerHTML = "Grade D";
        } else {
            gradeResult.innerHTML = "Grade F";
        }

    } catch (error) {
        // Handle exceptions and display informative messages
        validationMessage.innerHTML = error.message;
    }
}
