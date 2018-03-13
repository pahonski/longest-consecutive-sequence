module.exports = function longestConsecutiveLength(array) {
  // your solution here
    let sortArray = array.sort(function compareNumeric(a, b) {
        return a - b;
    });
    let countersArrayLength = [];
    let counter = 0;

    for (let i = 0; i < sortArray.length; i++) {
        if (sortArray[i] + 1 === sortArray[i + 1]) {
            counter++;

        } else {
            if (counter !== 0) {
                counter++;
                countersArrayLength.push(counter);
                counter = 0;
            } else {
                counter = 0;
                continue;
            }
        }
    }



    if (countersArrayLength.length === 0) {
        return 0;
    }

    if (countersArrayLength.length === 1) {
        return 1;
    }

    if (countersArrayLength.length > 1) {
        let result = function getLength() {
            let counter = 0;
            countersArrayLength.forEach(function (item) {
                if (counter < item) counter = item;
            });
            return counter;
        };

        return result();
    }
};

