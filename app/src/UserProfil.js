import React from 'react'

const UserProfil = ({ username,github,checked }) => (

    <div className="container" id="all" >

        <div id="profil" >
            
            <div id="bg" style={{ backgroundPosition: "center center"}}>
            <img src={username.avatar_url}/>
            </div>
            <div id="username" style={{color: "white"}}>
                {username.name}<br/>
                <a href={username.html_url}>   @{username.login} </a><br />
                {username.public_repos} publics repos <br />
                {username.followers} followers <br />
                {username.following} following <br />
            </div>

        </div>
        
        <div id="allRepos" className="row row-cols-2 row-cols-md-4">
    
   
   {
                            checked ?
                            github.map(item =>{
                                    if (item.fork != true)
                                        return (
                                            <div id="repo" className="border-all">
                                                <a href={item.clone_url}>{item.name}</a>
                                                <br/>
                                                <span>Language: {item.language}</span><br/>
                                                <span>Stars: {item.stargazers_count}</span><br/>
                                                <span>Forks: {item.forks}</span>
                                                <br/><br/>
                                            </div>
                                        )
                                })
                            :
                            github.map(item =>{
                                    return (
                                    <div id="repo" className="card-body">
                                        <a href={item.clone_url}>{item.name}</a>
                                        <br/>
                                        <span>Language: {item.language}</span><br/>
                                        <span>Stars: {item.stargazers_count}</span><br/>
                                        <span>Forks: {item.forks}</span>
                                        <br/><br/>
                                    </div>
                                    )
                                })
                        }
   </div>
    </div>
       
)


export default UserProfil