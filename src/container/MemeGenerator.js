import React, {Component} from 'react'

class MemeGenerator extends Component {
	constructor () {
		super()
		this.state = {
			topText: "",
			bottomText: "",
			randomImg: "http://i.imgflip.com/1bij.jpg",
			allMemeImgs: []  
		}
	this.handleChange = this.handleChange.bind(this)	
	this.handleSubmit = this.handleSubmit.bind(this)	
	}

	componentDidMount() {
		fetch("https://api.imgflip.com/get_memes")
			.then(response => response.json())
			.then(response => {
				const {memes} = response.data
				this.setState({ allMemeImgs: memes })
			})		
	}

	handleChange(event){
		const { name, value } = event.target		
		this.setState({ [name]: value })		
	}
/*
handleChange
-text from box shows up on the image
*/
	handleSubmit(event){
		event.preventDefault()
		const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
		const randMemeImg = this.state.allMemeImgs[randNum].url
		this.setState({ randomImg: randMemeImg })
	}	 

/*
handleSubmit
-prevents the initial image from displaying
-get a random item [index] from the array that's the lenth of all the images
-set randomImg to the .url of the random item [index] 
*/


	render(){
		return (
			<div className="App-body">
				<form className="form-meme" onSubmit={this.handleSubmit}>
					<input 	type="text" 
							name="topText" 
							value={this.state.topText} 
							onChange={this.handleChange} 
							placeholder="Top text" 
					/>
					<input 	type="text" 
							name="bottomText" 
							value={this.state.bottomText} 
							onChange={this.handleChange} 
							placeholder="Bottom text" 
					/>
					<button>Generate</button>
				</form>
				<div className="meme">
						<img className="meme-imgs" src={this.state.randomImg} alt="photos" />
						<h2 className="top">{this.state.topText}</h2>
						<h2 className="bottom">{this.state.bottomText}</h2>						
				</div>
			</div>
		)
	}
}


export default MemeGenerator