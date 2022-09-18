function Cost() {
  return (
    <div className="service__container__box__content table-wrapper cost">
      <h3 className="flex justify-between">
        <span className="flex items-center">
          <i className="fas fa-square-full fa-2xs" />
          권장 정비 공임
        </span>
        <span className="text-lg text-gray font-normal mobile:text-sm">
          (단위:원/VAT 포함)
        </span>
      </h3>
      <div className="overflow-auto">
        <table className="cost__table">
          <thead>
            <tr>
              <th>시간</th>
              <th>
                0.1H
                <br />
                6분
              </th>
              <th>
                0.2H
                <br />
                12분
              </th>
              <th>
                0.3H
                <br />
                18분
              </th>
              <th>
                0.4H
                <br />
                24분
              </th>
              <th>
                0.5H
                <br />
                30분
              </th>
              <th>
                0.6H
                <br />
                36분
              </th>
              <th>
                0.7H
                <br />
                42분
              </th>
              <th>
                0.8H
                <br />
                48분
              </th>
              <th>
                0.9H
                <br />
                54분
              </th>
              <th>
                1H
                <br />
                60분
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                삼륜차<p className="text-red">(55,000/H)</p>
              </td>
              <td>5,500</td>
              <td>11,000</td>
              <td>16,500</td>
              <td>22,000</td>
              <td>27,500</td>
              <td>33,000</td>
              <td>38,500</td>
              <td>44,000</td>
              <td>49,500</td>
              <td>55,000</td>
            </tr>
            <tr>
              <td>
                이륜차<p className="text-red">(49,500/H)</p>
              </td>
              <td>4,950</td>
              <td>9,900</td>
              <td>14,850</td>
              <td>19,800</td>
              <td>24,750</td>
              <td>29,700</td>
              <td>34,650</td>
              <td>39,600</td>
              <td>44,550</td>
              <td>49,500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Cost;
