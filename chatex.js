function solution(record) {
    let answer = [];

    record.forEach(item => {
        const splitRecord = item.split(' ');
        
        const keyword = splitRecord[0];
        const uid     = splitRecord[1];
        const name = splitRecord[2] ? splitRecord[2] : " ";
        
        switch (keyword) {
            case 'Enter': {
                const userExist = answer.find(item => item.user.uid == uid);
                if(userExist) {
                    answer = answer.map(item => {
                        if(item.user.uid == uid) {
                            return {
                                ...item,
                                user: {uid , name}
                            }
                        }

                        return item;
                    });
                };

             answer.push({
                 user: {uid , name},
                 message: 'came in'
             })
             break;   
            }
            case 'Leave' : {
                const existIndex = answer.findIndex(item => item.user.uid);
                if(existIndex > -1){
                    const name = answer[existIndex].user.nickName;
                }
                answer.push({
                    user: {uid , name},
                    message: 'has left'
                });
                break;
            }
            case 'Change' : {
                answer = answer.map(item => {
                    if(item.user.uid == uid){
                        return {
                            ...item,
                            user: {uid , name}
                        }
                }
                return item;
            });
            break;
            }
            default:
                break;
        }
    });

    return answer.map(item=> `${item.user.name} ${item.message}`)

}
console.log(solution(["Enter uid1234 Muzi", "Leave uid1234", "Enter uid1234 Ryan", "Leave uid1234"]));