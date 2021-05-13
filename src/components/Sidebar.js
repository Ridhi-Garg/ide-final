import Button from './Button'
const Sidebar = () => {
    
    const onClick =()=>{
    console.log('click')
}

    return (
        <div className='sidebar'>

            {/* <input value="User" width="10" className="btn" /> */}
            <img className="class-rounded" src="./def-user.png" height="95px" width="95px" id="user-img"/>
            <Button color='' text='View' onClick={onClick}/>
            <Button color='' text='Save' onClick={onClick}/>
            <Button color='' text='Collaborate' onClick={onClick}/>
            <Button color='' text='Share' onClick={onClick}/>
            <Button color='' text='Logout' onClick={onClick}/>
        </div>
    )
}

export default Sidebar
