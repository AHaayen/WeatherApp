var geocodeAddress = (address) => {

};

geocodeAddress('19146').then(() => {
    console.log(JSON.stringify(location, undefined, 2));
},(errorMessage) => {
    console.log(errorMessage);
});