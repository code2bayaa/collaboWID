const images_folder = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_host_url + "/assets" : process.env.REACT_APP_host_url_live + "/assets"
const api_url = process.env.REACT_APP_environment === "development" ? process.env.REACT_APP_api_url : process.env.REACT_APP_api_url_live

export const home_images = [
        {
            title : "HEALTH",
            image : images_folder + "/slides/slide6.jpeg",
            page : "/home/health"
        },
        {
            title : "GENDER",
            image : images_folder + "/carreers/gender.jpg",
            page : "/home/gender"
        },
        {
            title : "PEACE AND SECURITY",
            image : images_folder + "/slides/slide7.jpeg",
            page : "/home/peace"
        },
        {
            title : "GOVERNANCE",
            image : images_folder + "/slides/slide3.jpeg",
            page : "/home/governance"
        },
        {
            title : "CLIMATE CHANGE ADAPTATION & RESILIENCE",
            image : images_folder + "/carreers/climate.jpg",
            page : "/home/climate"
        },
        {
            title : "EDUCATION",
            image : images_folder + "/home/slide32.png",
            page: "/home/education"
        }
        
    ]

    export const select_home_images = async() => {
        try{
            const res = await fetch(api_url + "/wireframe",
                {
                    method:"POST",
                    headers : {'Content-type': 'application/json; charset=UTF-8'},
                    body:JSON.stringify({component:"home",list:home_images,count:1})
                }
            )
        
            const {status, data} = await res.json()
            console.log(data)
        
            if(status)
                return data
            else
                return home_images
        }catch(error){
            return home_images
        }

    }

    export const people = [
            {
                img:images_folder + "/home/testimonials6.jpeg",
                description:"",
                id:"one"
            },
            {
                img:images_folder + "/carreers/career5.jpg",
                description:"",
                id:"two"
            },
            {
                img:images_folder + "/carreers/career6.jpg",
                description:"",
                id:"three"
            },
            {
                img:images_folder + "/carreers/career7.jpg",
                description:"",
                id:"four"
            },
            {
                img:images_folder + "/carreers/career8.jpg",
                description:"",
                id:"five"
            },
            {
                img:images_folder + "/carreers/career9.jpg",
                description:"",
                id:"six"
            },
            {
                img: images_folder + "/carreers/career10.jpeg",
                description:"",
                id:"seven"
            }
        ]

        export const select_people = async() => {
            try{
                const res = await fetch(api_url + "/wireframe",
                    {
                        method:"POST",
                        headers : {'Content-type': 'application/json; charset=UTF-8'},
                        body:JSON.stringify({component:"home",list:people,count:2})
                    }
                )
            
                const {status, data} = await res.json()
            
                if(status)
                    return data
                else
                    return people
            }catch(error){
                return people
            }

        }

        export const stats = [
            {
                total:199999,
                img:images_folder + "/statistics/stat16.png",
                title:"Visitors"
            },
            {
                total:24,
                img:images_folder + "/statistics/stat19.png",
                title:"Awards" 
            },
            {
                total:14,
                img:images_folder + "/statistics/stat17.png",
                title:"Networks & Coalition" 
            },
            {
                total:6999,
                img:images_folder + "/statistics/stat18.png",
                title:"Population Impacted" 
            }
        ]

        export const select_stats = async() => {
            try{
                const res = await fetch(api_url + "/wireframe",
                    {
                        method:"POST",
                        headers : {'Content-type': 'application/json; charset=UTF-8'},
                        body:JSON.stringify({component:"home",list:stats,count:3})
                    }
                )
            
                const {status, data} = await res.json()
            
                if(status)
                    return data
                else
                    return stats
            }catch(error){
                return stats
            }

        }

        export const awards = [
            {
                image:images_folder + "/awards/awards.jpg",
                title:"9th Gender Mainstreaming Award (2nd Finalist) 2021",
                description:"Awarded on 9th September 2021 at South Africa. The Business Engage, developed the Gender Mainstreaming Awards in the year -----to encourage private sector and all actors to buy-in to achieving more meaningful participation and representation of women in the mainstream of business leadership arena."
            },
            {
                image:images_folder + "/awards/awards11.png",
                title:"Asasi Ya Jamii Award 2009",
                description:"Awarded by MUHURI & United Nations Office of The Human Rights In Kenya- MUHURI, celebrate the promotion and defence of all human rights accountably, responsively and professionally in the coastal part of Kenya and beyond; Office of United Nations Human Rights in Kenya works actively to define, help implement, and monitor international human rights standards."
            },
            {
                image:images_folder + "/awards/awards12.png",
                title:"7th World Women Leadership Award -Women Super Achiever Award-Category 2020",
                description:"Presented to our Executive Director- Betty Sharon, Through CWID for being one of the most respected Grassroots Women Leader in the sector, her contribution to the field of Women Platform and iconic status of nurturing of talents, training several youngsters to come up in their profession and to contribute to the field of women that deserves the recognition This was awarded during the World CSR Event in India -Mumbai"
            },
            {
                image:images_folder + "/awards/awards13.jpg",
                title:"Global NGO Leadership & Excellence Awards 2020",
                description:"Presented to Collaboration of Women in Development- CWID by The World CSR Day presents on 18th February, 2020 at Taj Lands End, Bandra, Mumbai. This Award was conferred on the quality of their work global reach and outlook and ability to contribute value of social change, the positive change that impacts lives of many and make a difference. This award was received during the World CSR 2020 Event in India -Mumbai"
            },
            {
                image:images_folder + "/awards/awards14.jpg",
                title:"Woman Super Achiever Award 2020",
                description:"This award is presented to the Executive Director Betty Sharon who achieved to win the mentor on leadership and Human Rights Defenders Motivational speaker Category during the 7th World Women Leadership Congress Award on 17th February 2020 at Tai Lands End, Mumbai"
            },
            {
                image:images_folder + "/awards/awards15.png",
                title:"Distinguish fellow Award 2019",
                description:"Awarded on 2019 at Kigali, Rwanda. The Distinguished Fellow Award annually recognizes an Eisenhower Fellow who has made a significant contribution in professional field and displays exceptional leadership within the Society."
            },
            {
                image:images_folder + "/awards/awards16.jpg",
                title:"6th Africa NGO Leadership Awards 2016",
                description:"Awarded By The World HRD Congress on 7th December, 2016 at Le Meridien, Mauritius. The World HRD Congress awards celebrates the best human resource and corporate social responsibility practices in the corporate arena around the world"
            },
            {
                image:images_folder + "/awards/awards17.jpg",
                title:"7th Africa NGO Leadership Awards 2017",
                description:"Awarded By The World HRD Congress on 7th December, 2016 at Le Meridien, Mauritius. The World HRD Congress awards celebrates the best human resource and corporate social responsibility practices in the corporate arena around the world"
            },
            {
                image:images_folder + "/awards/awards19.png",
                title:"Gender Mainstreaming Awards 2023",
                description:"Awarded to Collaboration of Women In Development(CWID) 2nd position for Empowerment of Women in the community. Presented by Business Engage Accenture. On 5th October 2023"
            }
        ]

        export const select_award = async() => {
            try{
                const res = await fetch(api_url + "/wireframe",
                    {
                        method:"POST",
                        headers : {'Content-type': 'application/json; charset=UTF-8'},
                        body:JSON.stringify({component:"home",list:awards,count:4})
                    }
                )
            
                const {status, data} = await res.json()
            
                if(status)
                    return data
                else
                    return awards
            }catch(error){
                return awards
            }

        }

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

        export const news = [

            {
                name:"Da'Voice",
                file:images_folder + "/newsletter/daVoice.pdf",
                type:"newsletter",
                date:"06-14-2024",
                img:images_folder + "/resources/davoice.png",
                description:`Welcome to our quarterly
                            newsletter! We are thrilled to
                            share with you the latest
                            developments in our mission to
                            make a positive impact in our
                            community.
                            Firstly, we would like to express
                            our gratitude to all of our
                            development partners and
                            communities who have
                            continued to support us d`
            },
            {
                name : "CWID-NEWSLETTER2",
                file : images_folder + "/pdf/publication/CWID-NEWSLETTER2-1.pdf",
                type : "newsletter",
                date : "05-23-2024",
                img : images_folder + "/resources/report.png",
                description : "Da’ VoiceThe Premier Grassroots Women Newsletter by Collaboration of Women in Development (CWID). It is important to ensure that diverse women participate in decision making tables which is possible through trainings on National and International frameworks which will help them advocate for their rights"
            }
        ]

        export const select_news = async() => {
            try{
                const res = await fetch(api_url + "/wireframe",
                    {
                        method:"POST",
                        headers : {'Content-type': 'application/json; charset=UTF-8'},
                        body:JSON.stringify({component:"insights",list:news,count:0})
                    }
                )
            
                const {status, data} = await res.json()
            
                if(status)
                    return data
                else
                    return news
            }catch(error){
                return news
            }

        }



// export default home