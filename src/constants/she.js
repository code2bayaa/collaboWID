const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

const she_constants = [
    {
        title:"She Trade Project",
        wall:images_folder + "/home/project6.png",
        wall2: images_folder + "/home/project6.png",
        body:`
                                Kilifi County has a total of twenty nine thousand, seven hundred and twenty (29,720) licensed small and medium enterprises with women owning 39.2%. There are two hundred and seventy one thousand, five hundred (271,500) unregistered and unlicensed informal businesses of which women own 64.7%. The unregistered informal trade employs three hundred and thirty eight thousand, six hundred and seventy-six (338,676) traders out of which 64.7% are women[1]. The unregistered traders experience many challenges ranging from poor quality services (i.e. social amenities and security). Most of the traders secure market spaces in the thirty-five (35) formal markets in the thirty-five wards.

                        To respond to the needs, the County has established a Trade Department under Trade, Industrialization, Cooperative Development, Tourism and Wildlife Ministry to ensure resource mobilization; policy guidance & law enforcement to ensure compliance to various laws; provide soft loans and guidance to potential traders and businesses. Through the Department, the County plans to establish two main markets, namely: (a) Construction of a modern fresh produce market at Mazeras; and (b) Construction of a Retail /wholesale market at Mtwapa. In addition, the County in 2016, Trade License Act which imposed an array of levies upon traders (including unregistered/unlicensed) was enacted[2].The County has also drafted Trade and Markets Bill which aims, among other things, to provide for the regulation of trade and other business activities, the establishment and management of markets.

                        Despite the above efforts by the County government, the County still lacks policy guidelines on trade and markets environment. This is partly why the introduced Bill and the Trade & License Act misses on basic elements. In addition, implementation of some of the clauses will require proper policy directions. For instance, the Trade and Licensing Act proposes authorised streets for hawking yet implementation of this section has remained a tall order as no regulations have been developed owing to lack of policy directions. In addition, women and hawkers have also reported unfair and/or discrimination in market spaces/stalls allocation. The county has no formal guidelines for allocation of market spaces. The new regime presents a threat (loss of business) to unlicensed traders as the market spaces and stalls will only be available for the licensed traders. While it is good regime, most women small scale traders (who are the bulk of the unlicensed) can not afford to county licenses.
        `
    }
]

        export const select_she = async() => {
            try{
                const res = await fetch(api_url + "/wireframe",
                    {
                        method:"POST",
                        headers : {'Content-type': 'application/json; charset=UTF-8'},
                        body:JSON.stringify({component:"projects",list:she_constants,count:13})
                    }
                )
            
                const {status, data} = await res.json()
            
                if(status)
                    return data[0]
                else
                    return she_constants[0]
            }catch(error){
                console.log(error)
                return she_constants[0]
            }
    
        }

export default she_constants