import React,{useState} from 'react';
import ReactPlayer from 'react-player';


function Player()
    {   
        const [state, setstate] = useState({
            playing:true
        })

        const{playing} = state

        const handlePlayPause = ()=>{
            console.log('Play/Pause button')
            this.setstate({playing:!this.state.playing})
        }
        return ( 
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='player'>
                            <ReactPlayer className='player-video viewer' playing={true} muted ={true} url= 'videos/video1.mp4' width='100%' height='100%'/>                        
                            <div className='controls'>  
            
                                <div className='topControls'>
                                    <h5 className='text-primary' style={{padding:10 ,paddingTop:20}}>Video Title</h5>
                                </div>
                                    
                                <div className='midControls'>
                                    <i aria-label='rewind' className="fas fa-backward controlIcons"></i>
                                    <i onClick={handlePlayPause} aria-label='play/pause' className="fas fa-play controlIcons"></i>
                                    <i aria-label='forward' className="fas fa-forward controlIcons"></i>
                                </div>
                        
                                <div className='bottomControls'>
                                    <div>
                                        <i onClick={handlePlayPause} aria-label='play/pause' className="fas fa-play bottomControlIcons"></i>
                                        <div className='volume-controller'>
                                            <i aria-label='play/pause' className="fas fa-volume-up bottomControlIcons"></i>
                                            <input type='range' className='volumeSlider' min='0' max='100' defaultValue='100'></input>
                                        </div>
                                        <button className="bottomControlIcons iconButton" style={{textDecoration:'none', marginLeft:20, cursor:'pointer'}}>05:05</button>
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-secondary" data-bs-container="body" data-bs-toggle="popover" data-bs-placement="top" data-bs-content="Top popover">
                                            Popover on top
                                        </button>
                                        <i aria-label='play/pause' className="fas fa-expand bottomControlIcons"></i>
                                    </div>  
                                </div>
                            </div>
                        </div>
                    </div>      
                </div>
            );
    }
 
export default Player;