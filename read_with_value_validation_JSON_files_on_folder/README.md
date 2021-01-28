# load_specific_json_files.js


This module search for files on folder and store this names on FILES, and then read them.

If one of FILES is a JSON file with a specific VALUE_VALIDATION with a specific VALUE_KEY, it be copy to obj[i].

IF NOT, doens't do nothing


Exemple: 


VALUE_VALIDATION = "active"

VALUE_KEY = "yes"

data1.json;

    {

        "active" : "yes",

        "filed" : "something usefull"
    }




data2.json;

    {

        "active" : "no",

        "title" : "nodejs base"

    }
 


callback:    obj = {
                    "0" :   {

                                "active" : "yes",

                                "filed" : "something usefull"

                            }
                    }  



I use this function to load usefull information.

The VALUE_VALIDATION is to load just specific files to specific objects



// Require Modules 

const fs = require('fs');

const path = require ('path');



Howto.js



const lf = require(load_specific_json_files);

const loadfiles = lf.load_specific_json_files (pc_folder, value_validation, value_key , function (loaded_files)){  
            // work with loaded_files


};
    
    


