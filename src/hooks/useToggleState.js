import {useState} from 'react'
function useToggle(intialval=false)
{
    const[state,setState] = useState(intialval)
    const toggle=()=>
    {
        setState(!state);
    }
    return[state,toggle];
}
export default useToggle;