import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './infoBox.css';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
export default function InfoBox({info}){

    const INIT_URL='https://images.unsplash.com/photo-1673191898695-8252d409d82c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D';
    const HOT_URL="https://images.unsplash.com/photo-1606657609539-192d24100d51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDUzfHxob3QlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const COLD_URL="https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL="https://images.unsplash.com/photo-1527766833261-b09c3163a791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    return(
        <div className="infoBox">
            <div className='cardContainer'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80?RAIN_URL:info.temp>15?HOT_URL:COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity>80?<ThunderstormIcon/>:info.temp>15?<WbSunnyIcon/>:<AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={'span'}>
        <p>Temperature={info.temp}&deg;C</p>
        <p>Humidity={info.humidity}</p>
        <p>Minimum Temperature={info.tempMin}&deg;C</p>
        <p>Maximum Temperature={info.tempMax}&deg;C</p>
        <p>The weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>

        </Typography>
      </CardContent>
     
    </Card>
            </div>           
        </div>
    );
}