// import "./index.css"

const NAVIGATION = (header, url) => {

    // const url = document.location.hash

    // console.log("url : " + url)
    // console.log(header)

    
    if(url === "#home"){
        header.current.classList.add("header-home")
        header.current.classList.remove("header-about")
        header.current.classList.remove("header-projects")
        header.current.classList.remove("header-resources")
        header.current.classList.remove("header-opportunity")
        header.current.classList.remove("header-gallery")

        return (
            <>
                <a href = "#health" >
                    <p>#Health</p>
                </a>
                <a href = "#peace" >
                    <p>#Peace & Security</p>
                </a>
                <a href = "#education" >
                    <p>#Economic Empowerment & Education</p>
                </a>
                <a href = "#climate" >
                    <p>#Climate Change Adaptation & Resilience</p>
                </a>
                <a href = "#gender" >
                    <p>#Promotion of Gender Equality & Access to Justice</p>
                </a>
                <a href="governance">
                    <p>#Governance</p>
                </a>
            </>
        )
    }else if(url === "#about"){
        header.current.classList.add("header-about")
        header.current.classList.remove("header-home")
        header.current.classList.remove("header-projects")
        header.current.classList.remove("header-resources")
        header.current.classList.remove("header-opportunity")
        header.current.classList.remove("header-gallery")

        return (
            <>
                <a href = "#us" >
                    <p>#Who We Are</p>
                </a>
                <a href = "#dogma" >
                    <p>#Vision & #Mission</p>
                </a>
                <a href="#team">
                    <p>#Team</p>
                </a>
                <a href = "#values" >
                    <p>#Values</p>
                </a>
                <a href = "#work" >
                    <p>#Work</p>
                </a>
                <a href="#approach">
                    <p>#Approach</p>
                </a>

            </>
        )
    }else if(url === "#projects"){

        header.current.classList.add("header-projects")
        header.current.classList.remove("header-home")
        header.current.classList.remove("header-about")
        header.current.classList.remove("header-resources")
        header.current.classList.remove("header-opportunity")
        header.current.classList.remove("header-gallery")


        return (
            <>
                <a href = "#open" >
                    <p>#Open Projects</p>
                </a>
                <a href = "#closed" >
                    <p>#Closed Projects</p>
                </a>

            </>
        )
    }else if(url === "#resources"){
        header.current.classList.add("header-resources")
        header.current.classList.remove("header-home")
        header.current.classList.remove("header-about")
        header.current.classList.remove("header-projects")
        header.current.classList.remove("header-opportunity")
        header.current.classList.remove("header-gallery")

    }else if(url === "#opportunity"){
        header.current.classList.add("header-opportunity")
        header.current.classList.remove("header-gallery")
        header.current.classList.remove("header-home")
        header.current.classList.remove("header-about")
        header.current.classList.remove("header-projects")
        header.current.classList.remove("header-resources")

        return (
            <>
                <a href = "#tender" >
                    <p>#Tenders</p>
                </a>
                <a href = "#vacancy" >
                    <p>#Vacancies</p>
                </a>
                <a href = "#consultancy" >
                    <p>#Consultancy</p>
                </a>
                <a href = "#corruption" >
                    <p>#Report Corruption</p>
                </a>
                <a href = "#feedback">
                    <p>#Feedback</p>
                </a>

            </>
        )
    }else if(url === "#gallery"){
        document.querySelector("#NavBar").classList.add("header-gallery")
        document.querySelector("#NavBar").classList.remove("header-opportunity")
        document.querySelector("#NavBar").classList.remove("header-home")
        document.querySelector("#NavBar").classList.remove("header-about")
        document.querySelector("#NavBar").classList.remove("header-projects")
        document.querySelector("#NavBar").classList.remove("header-resources") 

        return (
            <>
                <a href = "#images">
                    <p>Images</p>
                </a>
                <a href = "#videos">
                    <p>Videos</p>
                </a>
            </>
        )
    }
}

export default NAVIGATION