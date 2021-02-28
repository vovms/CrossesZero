import s from './WorkPlace.module.css';

const WorkPlace = () => {

    return (
        <div className={s.workPlase}>

            <div className={s.table}>

                <button className={s.button} onClick={handleClick}>O</button>
                <button className={s.button} onClick={handleClick}>button2</button>
                <button className={s.button} onClick={handleClick}>button3</button>
                <button className={s.button} onClick={handleClick}>button4</button>
                <button className={s.button} onClick={handleClick}>button5</button>
                <button className={s.button} onClick={handleClick}>button6</button>
                <button className={s.button} onClick={handleClick}>button7</button>
                <button className={s.button} onClick={handleClick}>button8</button>
                <button className={s.button} onClick={handleClick}>button9</button>

            </div>

        </div>
    );
}

function handleClick() {
    alert("55");
}

export default WorkPlace;



// class Toggle extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {isToggleOn: true};

//       // Ця прив'язка необхідна, щоб `this` працював у функції зворотнього виклику
//       this.handleClick = this.handleClick.bind(this);
//     }

//     handleClick() {
//       this.setState(state => ({
//         isToggleOn: !state.isToggleOn
//       }));
//     }

//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           {this.state.isToggleOn ? 'ON' : 'OFF'}
//         </button>
//       );
//     }
//   }