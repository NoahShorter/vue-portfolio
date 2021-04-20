<template>
    <div class="AboutMe">
        <img class="image" src="../assets/outsideMe.jpg">
        <div class="description">
            <h2>About Me:</h2>
            <p>
                Graduated from Oregon Institute of Technology (OIT) with a degree in Software Engineering, I am more than just a man behind a computer. 
                I also enjoy the outdoors with activities such as Hiking, Camping, and Backpacking. In life, I would like to explore more which I guess 
                would explain why I have had thoughts of getting an RV and exploring the United States.
            </p>
        </div>
    </div>
</template>

<style scoped>
.AboutMe {
    display: flex;
    background-color: #223843;
    color: #EFF1F3;
    width: 100%;
    border-bottom: 1px #EFF1F3 solid;
}

.image {
    height: 400px;
    width: 50%;
    max-width: 800px;
    object-fit: cover;
    padding: 20px;
    margin-left: auto;
}

.description {
    padding: 20px;
    width: 50%;
    max-width: 800px;
    margin-right: auto;
}

.description h2 {
    text-align: left;
}

@media screen and (max-width: 800px){
    .AboutMe {
        display: block;
    }

    .image {
        width: 100%;
    }

    .description {
        width: 100%;
    }
}
</style>