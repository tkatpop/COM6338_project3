let r_image= ["images/swim_instruction1.jpeg","images/swim_instruction2.jpeg","images/swim_instruction3.jpeg","images/swim_instruction4.jpeg","images/swim_instruction5.jpeg","images/swim_instruction6.jpg","images/swim_instruction8.jpg"],
    im = document.getElementById("my_image"),
    rand_int = Math.floor(Math.random() * 7);
im.src = r_image[rand_int];