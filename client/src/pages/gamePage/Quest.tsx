import React from 'react';
import { Questions } from './GamePage';



type QuestProps={
    quest: Questions
}
const Quest= ({quest}: QuestProps): JSX.Element =>{
return (
<div className=' Quest'>
    {quest.quest}
 </div>
 );

}
export default Quest
