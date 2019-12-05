import axios from 'axios'

export default async function(url){
    let res = await axios.get(url);
    const { erron,data } = res.data;
    if(erron === 0){   // 没有错误的时候
        return data;
    }else{
        alert('又错了')
    }
}