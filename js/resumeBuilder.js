var bio = {
	"name" : "Jesus Cruz",
	"role" : "Sr. Systems Operations Coordinator",
	"contacts" : {
		"mobile" : "804-926-4665",
		"email" : "jmcruz8114@gmail.com",
		"github" : "jmcruz8114",
		"twitter" : "@looch8114",
		"location" : "Chesterfield, VA, US"
	},
	"welcomeMessage" : "Hello World!",
	"skills" : [
		"Bioinformatics,", "Web developement,", "Object-Oriented Programming (Java & Perl),",
		"SQL,", "HTML,", "JavaScript,", "R,", "SAS,", "Unix,", "Microsoft Office,", "Mac OSX,",
		"Emergency Medicine"
	],
	"bioPic" : "images/profilepic.jpg"
}

var education = {
	"schools" : [
		{
			"name" : "Virginia Commonwealth University",
			"location" : "Richmond, VA, US",
			"degree" : "BS",
			"major" : "Bioinformatics",
			"dates" : "Jan 2009 - May 2012",
			"url" : "http://www.vcu.edu/"
		},
		{
			"name" : "Virginia Polytechnic Institute",
			"location" : "Blacksburg, VA, US",
			"degree" : "N/A",
			"major" : "Human Nutrition, Foods and Exercise - Exercise Science",
			"dates" : "Aug 2004 - May 2005",
			"url" : "http://www.vt.edu"
		},
		{
			"name" : "Virginia State University",
			"location" : "Petersburg, VA, US",
			"degree" : "N/A",
			"major" : "Biology",
			"dates" : "Jun 2001 - May 2003",
			"url" : "http://www.vsu.edu/"
		}
	],
	"onlineCourses" : [
		{
			"title" : "Web Developement",
			"school" : "Udacity",
			"dates" : "Dec 2014 - Current",
			"url" : "http://www.udacity.com/course/ud804"
		},
		{
			"title" : "Web Developement",
			"school" : "Udacity",
			"dates" : "Dec 2014 - Current",
			"url" : "http://www.udacity.com/course/ud804"
		}
	]
}

var work = {
	"jobs" : [
		{
			"employer" : "Capital One",
			"title" : "Sr Systems Ops Coor",
			"dates" : "May 2013 - Current",
			"description" : "I help get stuff done"
		},
		{
			"employer" : "Virginia Army National Guard",
			"title" : "Health Care Specialist (Medic)",
			"dates" : "Oct 2003 - Oct 2014",
			"description" : "I help get stuff done"
		}
	]
}

var projects = {
	"projects" : [
		{
			"title" : "Quick Tools Pulse Page",
			"dates" : "2014",
			"description" : "There was a helper web page for collection agents to use that put numerous tools at their fingertips.  It was later determined that the page would have to be converted to be housed on our business' social network to prevent access issues.  I was tasked to convert the.",
			"images" : [
				"http://placekitten.com/g/300/300",
				"http://placekitten.com/g/300/300"
			]
		},
		{
			"title" : "Sample Project 1",
			"dates" : "2014",
			"description" : "Again, I get stuff done",
			"images" : [
				"http://placekitten.com/g/300/300",
				"http://placekitten.com/g/300/300"
			]
		}
	]
}

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

	$("#topContacts").append(formattedMobile);
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedLocation);

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBioPic);

	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcomeMsg);
	
	if(bio.skills.length > 0) {
		
		$("#header").append(HTMLskillsStart);

		for (var i = 0; i < bio.skills.length; i++) {

			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
	
		}
	}
}

bio.display();

work.display = function() {
	$("#workExperience").append(HTMLworkStart);
	for (job in work.jobs) {

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);

		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

projects.display = function() {
	$("#projects").append(HTMLprojectStart);
	for (project in projects.projects) {

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0 ) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

education.display = function() {
	
	$("#education").append(HTMLschoolStart);
	for (school in education.schools) {
		var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedSchoolName);
		if (education.schools[school].degree != "N/A") {
			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			$(".education-entry:last").append(formattedSchoolDegree);
		}
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedSchoolDates);
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
		$(".education-entry:last").append(formattedSchoolLocation);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
		$(".education-entry:last").append(formattedSchoolMajor);
		/*var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[school].url);
		$(".education-entry:last").append(formattedSchoolURL);*/
	}
	var formattedOnlineClasses =
	$(".education-entry:last").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedOnlineTitle);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
		$(".education-entry:last").append(formattedOnlineSchool);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedOnlineDates);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedOnlineURL);

	}
}

education.display();

$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY;

	logClicks(x,y);
});

function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + 
    	name[0].slice(1).toLowerCase();

    return name[0] +" "+ name[1];
}

$("#main").append(internationalizeButton);


$("#mapDiv").append(googleMap);


