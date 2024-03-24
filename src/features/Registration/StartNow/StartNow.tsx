import { message } from 'antd';
import { useNavigate } from 'react-router-dom';
import { RightArrow } from 'src/assets/icons/RightArrow/RightArrow';
import { Button } from 'src/components/Button/Button';
import { PATHS } from 'src/constants/paths';
import { FireOutlined } from '@ant-design/icons';

export const StartNow = () => {
  const url: string =
    'https://s3-alpha-sig.figma.com/img/d7e3/369f/72762713ba97779b95dce16b30444d27?Expires=1711929600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aywGBzoOCKaHLTROUg1J-L1ScD~kPL0HpedKKyLeRMRSEeNFqco0oOU0~cDdiiGrJls082zGA72vdASbm28YY~V3shBdrZDKQ5rjdBkAhc2Bdt0ddVl2m3U3tF7iH2XhMNirQRBWRlNHnnARDZy~o6oBRwn~kuUdziHwFEgniY08wJo2u9-7KR6JCTf8806usdUgtr48BitLID4fwbyFKNux-LAjgO-UsCv70zxnoU5OsnzQ86j4aAFq4vQqa22oHBMrSI~66zmlCI3Km~6tbR9ILTBo~gkwP7q1D977Y7SEcZO4q0Bv73-nJn3MIUK5KVoVbMNAZVJlwnCoWZoO5w__';
  const navigate = useNavigate();
  return (
    <div className="start_now-main start_now">
      <img src={url} alt="start now" className="start_now-pic" />
      <h1 className="get_started_title start_now-spacer-top">
        enhance collaboration, and boost productivity
        <FireOutlined />
      </h1>
      <p className="start_now-description start_now-spacer-bottom">
        Streamline your workflow with our comprehensive task and project
        management platform, designed to simplify project organization, task
        delegation, and progress tracking for teams of all sizes.
      </p>

      <div className="start_now-layout start_now-spacer-bottom">
        <Button
          onClick={() => message.error('Not yet')}
          className="get_started-navigation-back"
          type="link"
        >
          About Us
        </Button>
        <Button
          onClick={() => navigate(PATHS.Register)}
          className="get_started-navigation-next"
        >
          GetStarted !{<RightArrow />}
        </Button>
      </div>
      <h4 >
        Already have an account?{' '}
        <a href="#" className="start_now">
          click here
        </a>
      </h4>
    </div>
  );
};
