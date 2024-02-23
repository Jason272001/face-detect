
import React from "react";

class Signup extends React.Component  {
         constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            name:'',
        }
    }

    onEmailChange = (event) => {
        this.setState({email:event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({password:event.target.value})
    }
    onNameChange = (event) => {
        this.setState({name:event.target.value})
    }

  onSubmitSignIn=()=>{
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password:this.state.password
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user.id) {
                    this.props.loadUser(user);
                    alert('Successfuly Register');

              this.props.onRouteChange('home');
          
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
                        Register
                        </legend>
                         <div className="mt3">
                        <label className="db fw6 lh-copy f6" for="name">
                            Name
                        </label>
                         <input
                            onChange={this.onNameChange}
                            className="pa2 input-reset ba bg-transparent  w-150"
                            type="text"
                            name="name"
                            id="name"
                            required
                            style={{ color:'white',boxShadow: '0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )',borderColor:'#1095e8',}}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" for="email-address">
                            Email
                        </label>
                        <input
                            onChange={this.onEmailChange}
                            className="pa2 input-reset ba bg-transparent  w-150"
                            type="email"
                                     name="email-address"
                                     required
                            id="email-address"
                            
                            style={{ color:'white',boxShadow: '0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )',borderColor:'#1095e8',}}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6"for="password">
                            Password
                        </label>
                      <input
                        onChange={this.onPasswordChange}          
                        className="b pa2 input-reset ba bg-transparent  w-150"
                        type="password"
                                     name="password"
                                     required
                        id="password"
                        style={{ color:'white',boxShadow: '0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )',borderColor:'#1095e8', }}
                        />
                    </div>
                 
                </fieldset>
                <div className="">
                        <input onClick={this.onSubmitSignIn}
                            className="b ph3 pv2 input-reset ba b--gray bg-transparent grow pointer f6 dib" style={{ color: '#1095e8', borderColor: '#1095e8', boxShadow: '0px 0px 8px 2px rgba( 7, 76, 250, 0.7 )' }}
                            type="submit"
                            value="Register"/>
                </div>
                <div className="lh-copy mt3">
                       

                </div>
            </div>
         </main>
    </article>   
    )
    }
   
}

export default Signup;