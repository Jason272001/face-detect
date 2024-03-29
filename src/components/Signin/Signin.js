
import React from "react";

class Signin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signInEmail: '',
            signInPassword:''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail:event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword:event.target.value})
    }

    onSubmitSignIn=()=>{
 //event.preventDefault();// only for form tag html
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password:this.state.signInPassword
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                         this.props.loadUser(user);
              this.props.onRouteChange('home');
          
                }
                else {
                    alert("Wrong user")
                }
        })
    }

    render() {
        return (
    <article className="br3 ba  b-10 mv4 w-100 w-50-m w-30-l mw7 center"  style={{ position: 'relative', zIndex: 2,borderColor:'#1095e8',boxShadow: '0px 0px 8px 2px rgba( 7, 76, 250, 0.7 )' }}>
         <main className="pa4 gray-80">
            <div className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">
                        Sign In
                    </legend>
                    <div className="mt3">
                        <label className="db fw6 lh-copy f6" htmlFor="email-address">
                            Email
                        </label>
                            <input
                            onChange={this.onEmailChange}      
                            className="pa2 input-reset ba bg-transparent  w-150"
                            type="email"
                            name="email-address"
                            id="email-address"
                            style={{ color:'white',boxShadow: '0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )',borderColor:'#1095e8',}}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6"htmlFor="password">
                            Password
                        </label>
                       <input
                        onChange={this.onPasswordChange} 
                        className="b pa2 input-reset ba bg-transparent  w-150"
                        type="password"
                        name="password"
                        id="password"
                        style={{ color:'white',boxShadow: '0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )',borderColor:'#1095e8', }}
                        />
                    </div>
                    <label className="pa0 ma0 lh-copy f6 pointer">
                        <input type="checkbox" />
                            &nbsp;Remember me
                    </label>
                </fieldset>
                <div className="">
                        <input onClick={this.onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--gray bg-transparent grow pointer f6 dib" style={{ color: '#1095e8', borderColor: '#1095e8', boxShadow: '0px 0px 8px 2px rgba( 7, 76, 250, 0.7 )' }}
                            type="submit"
                            value="Sign in"/>
                </div>
                <div className="lh-copy mt3">
                     

                </div>
            </div>
         </main>
    </article>   
    )}
    
  
}

export default Signin;