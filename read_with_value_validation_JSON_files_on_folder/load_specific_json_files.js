/**
 
2021-01-27
  

*/ 


// Require node Modules
const fs = require('fs');
const path = require ('path');

// Function
module.exports.load_specific_json_files = function (dir_name, value_validation, value_key, callback){

    console.log(" Folder =  " + dir_name + " ;  Property to look : " +  value_validation + " ;  Value of Property : " + value_key );
    var legible;
    var obj =[];
    var i=0;

    var read_dir = path.join(__dirname, dir_name ); 
    console.log ('**** Starting reading folder : ' + read_dir );
    //passsing directoryPath and callback function
    fs.readdir( read_dir , function (err, files) {    
                    if (err) {                  //handling error
                        return console.log('Unable to scan directory: ' + err);
                    }else {
                        console.log("no errors ...proced");
                            for ( var x in files){
                                    if (!!path.extname(files[x]) === true ){            // check is files[x] is a folder=false or file= true,   extension
                                            console.log (files[x] + ': is a file' );
                                            legible = JSON.parse(fs.readFileSync(path.join(read_dir + '/' + files[x])))   // Load file 
                                            
                                            if (value_validation == "load_all"){
                                                    obj[i] = legible;


                                            }else {

                                                    if(legible[value_validation] == value_key){
                                                        console.log (files[x] + ': is a legible, because it have :  ' + '"' + value_validation +'"' + ' =  "' + value_key +'"');
                                                        obj[i] = legible;
                                                        i++;
                                                    }else {
                                                        console.log ( "Validation fail" + '"' + value_validation +'"' + ' = !  "' + value_key +'"' );
                                                    }

                                            }
                                        
                                    }else {
                                            console.log (files[x] + ': is a folder or non JSON format, or doesn´t have: '+ '"' + value_validation +'" Field' );
                                    };                          
                        };
                    };
                    callback(obj);
    });
}