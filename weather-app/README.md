# Simple Weather App

This is a simple weather app using React.

Weather data is retrieved by using openweathermap.org API.

City search form component is using an API (http url: http://openweathercitydata-env.eba-8m22zcvc.ap-northeast-1.elasticbeanstalk.com/cities/search/) that
I personally created since openweathermap.org did not provide such API.

You can find more about this API that city search form is using at [OpenWeather-Backend repository](https://github.com/Miafargo/OpenWeather-Backend)

## Important!

For this weather app to work you have to allow insecure content because searching city will request a
http (not https) url as mentioned above in the app description.

If insecure content (mixed content) is not allowed, app will show "No cities matched your search criteria".

If you are using chrome or firefox click on an applicable url and follow the instructions to allow insecure content.

Chrome: [url](https://support.google.com/chrome/answer/95617?hl=en)

Firefox: [url](https://www.utica.edu/academic/iits/compuserservices/helpsheets/insecurecontenthelp.cfm)

You can checkout this app at https://elegant-hoover-1b44bb.netlify.app
