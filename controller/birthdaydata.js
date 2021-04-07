var Birthday = require('../model/birthdaydata');

exports.test = function (req,res) {
    res.send("Greetings from TEST Controller");
};

exports.birthday_info_all = function (req,res) {
    Birthday.find(function (err, birthday) {
        if (err) {
            return err;
        }
        res.send(birthday);
    });
};

exports.birthday_info_by_id = function (req,res) {
    Birthday.findById(req.params.id, function (err, birthday) {
        if (err) {
            return err;
        }
        res.send(birthday)
    }); 
};

exports.birthday_create = function (req,res) {
    console.log("Req Body:" + JSON.stringify(req.body));
    var birthday = new Birthday({
        id:req.body.id,
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        birthday:req.body.birthday,
        gender:req.body.gender 
    });
    birthday.save(function (err, birthday) {
        if (err) {
            return err;
        }
        res.send("Birthday Data Created..." + birthday.id)
    });
};

exports.birthday_info_update_by_id = function (req,res) {
    Birthday.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        function (err, birthday) {
            if (err) {
                return err;
            }
            res.send("Birthday Data is updated:" + birthday);
        }
    );
};