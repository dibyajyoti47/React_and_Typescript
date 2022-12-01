import { Child, ChildAsFC } from './Child';

const Parent = () => {
    return <ChildAsFC color='Green' onClick= {() => console.log('hi there')}>
        <p>Some text</p>
    </ChildAsFC>
}

export default Parent;