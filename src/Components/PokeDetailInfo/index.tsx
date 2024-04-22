import './PokeDetailInfo.css';

function PokeDetailInfo(props: any) {
  return (
    <li className="pocke-detail-info">
      <span className="pocke-detail-info-key">{props.keyTitle}</span>
      <span className="pocke-detail-info-value">{props.value}</span>
    </li>
  );
}

export default PokeDetailInfo;
