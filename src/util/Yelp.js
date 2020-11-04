const apiKey = 'elXDKgxkzh9CZ4RHbDzRN8NHPdB-AO7RburMxvuSCpelQD9NZ5hiV5wfVxDCWAOj5tII7vx_XTXL24nNo7SAyTsT6EphTDFbOTmeU4k47qeeNN4gBZyFkS5bL-aiX3Yx';
const Yelp = {
    search(term,location,sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        {headers: {
            Authorization: `Bearer ${apiKey}`
                }
        }).then(response => {
            return response.json();
        }).then( jsonResponse => {
            if ('businesses' in jsonResponse){
                
                return jsonResponse.businesses.map( business =>{
                    
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories[0].title,
                        rating: business.rating,
                        reviewCount: business.review_count,
                    };
                })
            }
        })
    },
};

export default Yelp;