import {Circle} from 'better-react-spinkit';

function Loading() {
    return (
        <center style={{display: 'grid', placeItems: 'center', height: '100vh'}}>
            <div>
                <img src='https://cdn-icons-png.flaticon.com/128/1384/1384055.png' height={200} style={{marginBottom: 10}} alt='' />
                <Circle color='#3C4C28' size={60} />
            </div>
        </center>
    )
}

export default Loading
