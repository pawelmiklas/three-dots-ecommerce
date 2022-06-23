import classes from './PaymentMethod.module.scss';
const PaymentMethod = ({ setCurrent }: { setCurrent: (arg: number) => void }) => {
  const images = [
    { src: 'images/flaga_wszystkie-min_04.png', width: '117', height: '70' },
    { src: 'images/flaga_wszystkie-min_05.png', width: '162', height: '70' },
    { src: 'images/flaga_wszystkie-min_06.png', width: '173', height: '70' },
    { src: 'images/flaga_wszystkie-min_07.png', width: '228', height: '70' },
    { src: 'images/flaga_wszystkie-min_08.png', width: '198', height: '70' },
    { src: 'images/flaga_wszystkie-min_09.png', width: '152', height: '70' },
    { src: 'images/flaga_wszystkie-min_10.png', width: '209', height: '70' },
    { src: 'images/flaga_wszystkie-min_11.png', width: '279', height: '106' },
    { src: 'images/flaga_wszystkie-min_12.png', width: '173', height: '106' },
    { src: 'images/flaga_wszystkie-min_13.png', width: '281', height: '106' },
    { src: 'images/flaga_wszystkie-min_14.png', width: '168', height: '106' },
    { src: 'images/flaga_wszystkie-min_15.png', width: '338', height: '106' },
    { src: 'images/flaga_wszystkie-min_16.png', width: '303', height: '84' },
    { src: 'images/flaga_wszystkie-min_17.png', width: '220', height: '84' },
    { src: 'images/flaga_wszystkie-min_18.png', width: '261', height: '84' },
    { src: 'images/flaga_wszystkie-min_19.png', width: '275', height: '84' },
    { src: 'images/flaga_wszystkie-min_20.png', width: '180', height: '84' },
    { src: 'images/flaga_wszystkie-min_21.png', width: '248', height: '90' },
    { src: 'images/flaga_wszystkie-min_22.png', width: '275', height: '90' },
    { src: 'images/flaga_wszystkie-min_23.png', width: '269', height: '90' },
  ];
  return (
    <div>
      <div>
        <img draggable={false} src="images/flaga_wszystkie-min_02.png" width="1239" height="114" alt="" />
      </div>
      <div className={classes.container}>
        {images.map((item, index) => {
          return (
            <img
              onClick={() => setCurrent(3)}
              draggable={false}
              key={index}
              src={item.src}
              width={item.width}
              height={item.height}
            />
          );
        })}
      </div>
    </div>
    // <div>
    //   <div id="Tabela_01">
    //     <div>
    //     </div>
    //     <div>
    //       <div>
    //         <img src="images/flaga_wszystkie-min_04.png" width="117" height="70" alt="" />
    //       </div>
    //       <div ={2}>
    //         <img src="images/flaga_wszystkie-min_05.png" width="162" height="70" alt="" />
    //       </div>
    //       <div ={3}>
    //         <img src="images/flaga_wszystkie-min_06.png" width="173" height="70" alt="" />
    //       </div>
    //       <div ={3}>
    //         <img src="images/flaga_wszystkie-min_07.png" width="228" height="70" alt="" />
    //       </div>
    //       <div ={4}>
    //         <img src="images/flaga_wszystkie-min_08.png" width="198" height="70" alt="" />
    //       </div>
    //       <div ={3}>
    //         <img src="images/flaga_wszystkie-min_09.png" width="152" height="70" alt="" />
    //       </div>
    //       <div ={2}>
    //         <img src="images/flaga_wszystkie-min_10.png" width="209" height="70" alt="" />
    //       </div>
    //     </div>
    //     <div>
    //       <div ={3}>
    //         <img src="images/flaga_wszystkie-min_11.png" width="279" height="106" alt="" />
    //       </div>
    //       <div ={3}>
    //         <img src="images/flaga_wszystkie-min_12.png" width="173" height="106" alt="" />
    //       </div>
    //       <div ={4}>
    //         <img src="images/flaga_wszystkie-min_13.png" width="281" height="106" alt="" />
    //       </div>
    //       <div ={4}>
    //         <img src="images/flaga_wszystkie-min_14.png" width="168" height="106" alt="" />
    //       </div>
    //       <div ={4}>
    //         <img src="images/flaga_wszystkie-min_15.png" width="338" height="106" alt="" />
    //       </div>
    //     </div>
    //     <div>
    //       <div ={4}>
    //         <img src="images/flaga_wszystkie-min_16.png" width="303" height="84" alt="" />
    //       </div>
    //       <div ={3}>
    //         <img src="images/flaga_wszystkie-min_17.png" width="220" height="84" alt="" />
    //       </div>
    //       <div ={4}>
    //         <img src="images/flaga_wszystkie-min_18.png" width="261" height="84" alt="" />
    //       </div>
    //       <div ={6}>
    //         <img src="images/flaga_wszystkie-min_19.png" width="275" height="84" alt="" />
    //       </div>
    //       <div>
    //         <img src="images/flaga_wszystkie-min_20.png" width="180" height="84" alt="" />
    //       </div>
    //     </div>
    //     <div>
    //       <div ={2}>
    //         <img src="images/flaga_wszystkie-min_21.png" width="248" height="90" alt="" />
    //       </div>
    //       <div ={5}>
    //         <img src="images/flaga_wszystkie-min_22.png" width="275" height="90" alt="" />
    //       </div>
    //       <div ={5}>
    //         <img src="images/flaga_wszystkie-min_23.png" width="269" height="90" alt="" />
    //       </div>
    //       <div ={3}>
    //         <img src="images/flaga_wszystkie-min_24.png" width="187" height="90" alt="" />
    //       </div>
    //       <div ={3}>
    //         <img src="images/flaga_wszystkie-min_25.png" width="260" height="90" alt="" />
    //       </div>
    //     </div>
    //     <div>
    //       <div ={2}>
    //         <img src="images/flaga_wszystkie-min_26.png" width="248" height="95" alt="" />
    //       </div>
    //       <div ={3}>
    //         <img src="images/flaga_wszystkie-min_27.png" width="108" height="95" alt="" />
    //       </div>
    //       <div ={2}>
    //         <img src="images/flaga_wszystkie-min_28.png" width="167" height="95" alt="" />
    //       </div>
    //       <div>
    //         <img src="images/flaga_wszystkie-min_29.png" width="133" height="95" alt="" />
    //       </div>
    //       <div ={4}>
    //         <img src="images/flaga_wszystkie-min_30.png" width="136" height="95" alt="" />
    //       </div>
    //       <div ={3}>
    //         <img src="images/flaga_wszystkie-min_31.png" width="187" height="95" alt="" />
    //       </div>
    //       <div ={3}>
    //         <img src="images/flaga_wszystkie-min_32.png" width="260" height="95" alt="" />
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default PaymentMethod;
