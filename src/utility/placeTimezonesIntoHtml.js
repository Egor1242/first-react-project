export const placeTimezonesIntoHtml = (timezones) =>{
    if(timezones?.length > 0){
        if(timezones?.length > 1){
            return `${timezones[0]} - ${timezones[timezones?.length-1]}`
        }
        else {
            return timezones[0]
        }
    }
    else{
        return null
    }
}