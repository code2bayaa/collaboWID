const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live


const news_constants = [
    
    {
        img:images_folder + "/news/news1.jpg",
        title:"Statement on unlawful detention of activists in Kenya",
        date:"June 20, 2024",
        article:`
                                    Civil society organisations in the Eastern Africa region are condemning the unlawful detention of activists and human rights defenders during yesterday’s protest in Nairobi against the Finance Bill 2024, and are urging international action. Rights & Security International (RSI) reports today. According to RSI’s partner organisations in the region, hundreds of peaceful protesters were detained in an operation that involved excessive force and intimidation. Protesters were demanding the complete withdrawal of the Finance Bill, which seeks to introduce new and higher tax measures and a review of the Government’s overall budget to reduce waste and enhance access to public services. Mombasa-based activist and RSI partner Hussein Khalid was among the detained. 

                            The Constitution of Kenya recognises the right to peaceful assembly and protest under Article 37. Moreover, Kenya is a state party of the African Charter on Human and People’s Rights, which enshrines the freedoms of association and assembly (Article 11) as well as protection from arbitrary detention (Article 6). Mary Yvonne Ododa, Chief Operation Officer of Kenyan organisation Epuka Ugaidi, stated: ‘Epuka Ugaidi stands firmly against the unjust detention of peaceful protestors. The use of excessive force to suppress lawful demonstrations is a direct violation of the fundamental rights enshrined in our constitution and international human rights instruments. We call on the Kenyan government to respect the rule of law and protect the rights of its citizens to peacefully express their grievances. The international community must not turn a blind eye to these transgressions, and we urge swift action to hold accountable those responsible for these violations.’  

                            Betty Sharon, Executive Director of Collaboration for Women in Development, a Mombasa-based organisation, added: ‘Kenyans, especially the grassroots, are already overburdened with tax and no service delivery. Wellness and lifestyle are something that shouldn’t be taken for granted and bringing a tax into products that [are] good for one’s health will drive people to less expensive options. We just have no option, and arresting our colleagues will not stop us either. We demand the immediate release of all the innocent demonstrators as the constitution allows for peaceful picketing and demonstration.’ 

                            Justus Muraya, Executive Director of the African Centre for Endangered Security (ACES), commented:  "The use of strong-arm tactics to suppress dissenting voices for merely expressing their displeasure with the controversial Finance Bill was ill-advised, cowardly and unjust. Throughout the protest, participants, the majority of them as young as 18 to –22, remained peaceful, orderly and unarmed despite provocation by security agencies. The fact that the government later on in the day rescinded the decision to push through with some of the controversial tax proposals is a testament that the demonstrators were well within their rights. This incident demonstrates what we have always said: that the civic space is shrinking fast, and freedom of expression is unfortunately the first to be curtailed." 

                            RSI has supported partners in documenting the harmful consequences of police brutality in Kenya and other Global Majority countries, raising alarms about increasing uses of force against unarmed civilians. This apparent trend demands joint efforts across borders to uphold international standards and hold governments to account, the organisation said. 

                            Simón Hurtado Delgado, Team Leader on International Civic Space at RSI, concluded, ‘No police or security forces, in any country, should have a blank cheque. Governments and international bodies should speak out much more strongly and demonstrate solidarity with those fighting to protect the rule of law and the healthy running of democratic institutions.’
        `
    }
]

export const select_all_news = async() => {
    const res = await fetch(api_url + "/wireframe",
        {
            method:"POST",
            headers : {'Content-type': 'application/json; charset=UTF-8'},
            body:JSON.stringify({component:"home",list:news_constants,count:5})
        }
    )

    const {status, data} = await res.json()

    if(status)
        return data
    else
        return []
}