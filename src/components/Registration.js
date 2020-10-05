import React from 'react'


class Registration extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            username:'',
            email:'',
            password:'',
            password_confirmation:''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        console.log(this.state)
    }

    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }



    render(){
        return(
            <div className='container'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className='form-control'>
                        <input 
                            type='email'
                            name='email'
                            placeholder='Email'
                            value={this.state.email}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className='form-control'>
                        <input 
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div className='form-control'>
                        <input 
                            type='password'
                            name='password_confirmation'
                            placeholder='Confirm password'
                            value={this.state.password_confirmation}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <button type='submit'>Register</button>
                </form>
            </div>
        )
    }

}

export default Registration