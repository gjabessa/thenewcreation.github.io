const mongoose = require("mongoose");
const Job = mongoose.model("Job");
const serverError = 500;
const userError = 400;
const success = 200;

module.exports.jobsGetAll = function (req, res) {

	let offset = 0;
	let count = 4;
	const maxCount = 8;

	if (req.query && req.query.lat && req.query.lng) {
		runGeoQuery(req, res);
		return;
	}

	if (req.query && req.query.offset) {
		offset = parseInt(req.query.offset)
	}

	if (req.query && req.query.count) {
		count = parseInt(req.query.count);
	}

	if (isNaN(offset) || isNaN(count)) {
		res.status(userError).json({ "message": "Offset and count incorrect" });
		return;
	}

	if (count > maxCount) {
		res.status(userError).json({ "message": "max count is greater than count" });
	}


	Job.find().skip(offset).limit(count).exec(function (err, jobs) {
		const response = {
			status: success,
			message: jobs
		};
		if (err) {

			response.status = serverError;
			response.message = err;
		}
		res.status(response.status).json(response.message);
	});
};

module.exports.jobsAddOne = function (req, res) {

	if (!req.body.skills) {
		req.body.skills = []
	}

	const newJob = {
		title: req.body.title,
		salary: parseFloat(req.body.salary),
		skills: req.body.skills,
		experience: req.body.experience,
		description: req.body.description,
		location: {address: req.body.address, city: req.body.city, postCode: req.body.postCode},
		postDate: req.body.postDate
	};

	Job.create(newJob, function (err, Job) {
		const response = {
			status: 201,
			message: Job
		};

		if (err) {

			response.status = serverError;
			console.log(err)
			response.message = err;
		}
		res.status(response.status).json(response.message);
	});
}

module.exports.jobsGetOne = function (req, res) {
	const jobId = req.params.jobId;
	if (jobId.length != 24) {
		res.status(userError).json({ "message": "job id is incorrect" });
	}

	Job.findById(jobId).exec(function (err, job) {
		const response = {
			status: success,
			message: job
		};

		if (err) {

			response.status = serverError;
			response.message = err;
		} else if (!job) {
			response.status = userError;
			response.message = { "message": "job Id not found" };
		}

		res.status(response.status).json(response.message);
	});
};

module.exports.jobsFullUpdateOne = function (req, res) {
	
	const jobId = req.params.jobId;
	    
	Job.findById(jobId).exec(function (err, job) {
	    const response = {
		status: 204,
		message: job
	    };
    
	    if (err) {
		response.status = serverError;
		response.message = err;
	    } else if (!job) {
		response.status = userError;
		response.message = { "message": "Job Id not found" };
	    }
    
	    if (response.status !== 204) {
		res.status(response.status).json(response.message);
	    } else {
		

		job.title = req.body.title;
		job.salary = parseFloat(req.body.salary);
		job.skills = req.body.skills;
		job.experience = req.body.experience;
		job.description = req.body.description;
		job.location =  {address: req.body.address, city: req.body.city, postCode: req.body.postCode};
		job.postDate = req.body.postDate;
    
		job.save(function (err, updatedJob) {
		    if (err) {
			response.status = serverError;
			response.message = err;
		    } else {
			response.message = updatedJob;
		    }
		    res.status(response.status).json(response.message);
		})
    
    
	    }
    
	});
    };

module.exports.jobsPartialUpdateOne = function (req, res) {
    const jobId = req.params.jobId;


    Job.findById(jobId).exec(function (err, job) {
        const response = {
            status: 204,
            message: job
        };

        if (err) {
            response.status = serverError;
            response.message = err;
        } else if (!job) {
            response.status = userError;
            response.message = { "message": "Job Id not found" };
        }

        if (response.status !== 204) {
            res.status(response.status).json(response.message);
        } else {
            //This is where update happens
            if (req.body.title) {
                job.title = req.body.title;
            }

            if (req.body.salary) {
                job.salary = parseFloat(req.body.salary);
            }

	    if (req.body.skills) {
                job.skills = req.body.skills;
            }
	    if (req.body.experience) {
                job.experience = req.body.experience;
            }
           if (req.body.description) {
                job.description = req.body.description;
            }
		
	    if (req.body.postDate) {
                job.postDate = req.body.postDate;
            }
		    job.location =  {address: req.body.location.address, city: req.body.location.city, postCode: req.body.location.postCode};
	    
            job.save(function (err, updatedJob) {
                if (err) {
                    response.status = serverError;
                    response.message = err;
                } else {
                    response.message = updatedJob;
                }
                res.status(response.status).json(response.message);
            })


        }

    });
};

module.exports.jobsDeleteOne = function (req, res) {

    const jobId = req.params.jobId;
    if (jobId.length != 24) {
        res.status(userError).json({ "message": "job id is incorrect" });
    }

    Job.findByIdAndRemove(jobId).exec(function (err, deletedJob) {
        const response = {
            status: 204,
            message: deletedJob
        };

        if (err) {
            response.status = serverError;
            response.message = err;
        } else if (!deletedJob) {
            response.status = userError;
            response.message = { "message": "Job Id not found" };
        }

        res.status(response.status).json(response.message);
    });
};

