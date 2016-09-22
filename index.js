function MyPage(){

	const title = React.createElement('h1', {}, "An Awesome Person")
	const tagline = React.createElement('p', {}, 'Who is learning React')


	const interests = ['JavaScript', 'React', 'Movies', 'Ice cream']

	const myRealInterests = ['music', 'sleeping', 'making things', 'wine']

	function InterestList(interests){

		const parsedInterests = interests.map(function(interest){
			return React.createElement('li', {}, interest)
		})

		const interestUl = React.createElement('ul', {className: 'me__interests'}, parsedInterests)

		return interestUl
	}

	const myInterests = InterestList(interests)

	const meInReact = React.createElement('div', {className: 'me'}, [title, tagline, myInterests])

	return meInReact
}

const meInReact = MyPage()


ReactDOM.render(
	meInReact,
	document.getElementById('main')
)


