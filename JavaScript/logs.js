export const LOG_TYPE_1 = 1;
export const LOG_TYPE_2 = 2;

export default function(logType, text){
    if(logType === LOG_TYPE_1){
        console.log('LOG TYPE 1:' + text);
    } else {
        console.log('LOG TYPE 2: ' + text);
    }
}