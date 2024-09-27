const { program } = require('commander');
const fs = require('fs');



function writeOutput(output, result) {
    fs.writeFile(output, result, (err) => {
        if (err) {
            console.error('Error writing to output file:', err);
            process.exit(1);
        }
    });
}



program
    .requiredOption('-i, --input <file>')
    .option('-o, --output <file>')
    .option('-d, --display')
    .parse()

const options = program.opts();


if (!options.input) {
    console.error('Please, specify input file');
    process.exit(1);
}

if (!fs.existsSync(options.input)) {
    console.error('Cannot find input file');
    process.exit(1);
}



fs.readFile(options.input, 'utf-8', (err, result) => {
    if (err) {
        console.error('Error reading input file:', err);
        process.exit(1);
    }



    if (options.output && options.display) {
        console.log(result);

        writeOutput(options.output, result);
    }


    if (options.output) {
        writeOutput(options.output, result);
    }


    if (options.display) {
        console.log(result);
    }

});


