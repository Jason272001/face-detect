
import React from "react";

const Signup = ({onRouteChange}) => {
    
    return (
    <article className="br3 ba  b-10 mv4 w-100 w-50-m w-30-l mw7 center"  style={{ position: 'relative', zIndex: 2,borderColor:'#1095e8',boxShadow: '0px 0px 8px 2px rgba( 7, 76, 250, 0.7 )' }}>
         <main className="pa4 gray-80">
            <form className="measure">
                <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                    <legend className="f1 fw6 ph0 mh0">
                        Register
                        </legend>
                         <div className="mt3">
                        <label className="db fw6 lh-copy f6" for="name">
                            Name
                        </label>
                        <input
                            className="pa2 input-reset ba bg-transparent  w-150"
                            type="text"
                            name="name"
                            id="name"
                            style={{ color:'white',boxShadow: '0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )',borderColor:'#1095e8',}}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6" for="email-address">
                            Email
                        </label>
                        <input
                            className="pa2 input-reset ba bg-transparent  w-150"
                            type="email"
                            name="email-address"
                            id="email-address"
                            style={{ color:'white',boxShadow: '0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )',borderColor:'#1095e8',}}
                        />
                    </div>
                    <div className="mv3">
                        <label className="db fw6 lh-copy f6"for="password">
                            Password
                        </label>
                        <input
                        className="b pa2 input-reset ba bg-transparent  w-150"
                        type="password"
                        name="password"
                        id="password"
                        style={{ color:'white',boxShadow: '0px 0px 8px 2px rgba( 7, 76, 250, 0.2 )',borderColor:'#1095e8', }}
                        />
                    </div>
                 
                </fieldset>
                <div className="">
                        <input onClick={()=>onRouteChange('signin')}
                            className="b ph3 pv2 input-reset ba b--gray bg-transparent grow pointer f6 dib" style={{ color: '#1095e8', borderColor: '#1095e8', boxShadow: '0px 0px 8px 2px rgba( 7, 76, 250, 0.7 )' }}
                            type="submit"
                            value="Register"/>
                </div>
                <div className="lh-copy mt3">
                        <a href="#0"className="f6 link dim gray db">
                
                            <p onClick={()=>onRouteChange('signin')} style={{ color:'#1095e8',textDecoration:'underline' }}>Sign up</p>
                        </a>

                </div>
            </form>
         </main>
    </article>   
    )
}

export default Signup;