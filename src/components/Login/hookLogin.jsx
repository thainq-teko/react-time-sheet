
import React, { useState, useGlobal } from 'reactn';


const hookLogin = props => {
    const [username, setUsername] = useState('')
    const [messageUsername, setMessage] = useState('')

    const handleInput = (event) => {
        let input = event.target.value;
        let regexTV = /^[ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ]+$/
        let regexSpace = /\s+/g
        if (!input) {
            setMessage(messageUsername => messageUsername = "ko dc de trong")
        }
        else {
            if (input.length < 6 || regexTV.test(input)) {                
                setMessage(messageUsername => messageUsername = "gom 6 ky tu viet thuong tro len, viet lien ko dau")
            }
            else {
                console.log(input)
                setUsername(username => username = input)
                setMessage(messageUsername => messageUsername = '')
            }
        }
    }

    return (
        <div>
            <div>
                <label htmlFor="">Username</label>
                <input type="text" autoFocus autoComplete="off" name="username" onBlur={(event) => handleInput(event)} />
                <br />
                <span>
                    {messageUsername && <b>{messageUsername}</b>}
                </span>
            </div>
            {/* <div>
                <label htmlFor="">Password</label>
                <input type="text" autoComplete="off" name="username" onBlur={(event) => handleInput(event)} />
                <br />
                <span>
                    {message && <b>{message}</b>}
                </span>
            </div> */}
            <button onClick={() => {
                messageUsername ? console.log('sai') : console.log({username})
            }}>send</button>
        </div>
    )
}

export default hookLogin;

