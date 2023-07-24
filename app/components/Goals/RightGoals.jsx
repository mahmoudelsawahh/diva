import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import { Box, IconButton, Typography , Fade} from '@/app/lib/MuiSsr';

const GoalsData = [
    {
        title : ' مساعدة العملاء وتلبية احتياجاتهم ',
        description : 'يحرص ديفا على تقديم المساعدة لعملائه وتلبية إحتياجاتهم من خلال توفير أحدث موديلات الزفاف، الخطوبة، والسواريه من أرقى الدول الأوروبية مثل " أمريكا – فرنسا " وغيرهم.        '
    },
    {
        title : ' تلبية طموحات العرايس ',
        description : 'يبذل ديفا قصارى جهده لضمان تلبية طموحات العرائس من خلال توفير أرقى البراندات العالمية المستخدمة في الميك أب حديثاً لضمان ثبات أطول للـ " ميك أب " وعدم إضراره بالبشرة وإجهادها.        '
    },
    {
        title : ' توفير احدث انواع التاجات والطرح ',
        description : 'يقوم ديفا بتوفير احدث انوا ع الطرح المستخدمة في تجميل العرائس والمستوردة من دول الاتحاد الاوروبي ', 
    },
    {
        title : ' ميك اب استوديو ',
        description : 'تقوم مدام ديفا بعمل الميك اب الخاص بالعروسة حيث تستخدم اقوى واعلى البراندات العالمية للميك اب مما يظهر جمال العروسة '
    }
]
const RightGoals = () => {
  return (
    <Box>
        {
            GoalsData.map((item , id)=>{
                return (
                        // eslint-disable-next-line react/jsx-key
                        <Box sx={{margin : '50px 0px'}} key={id}>
                        <Fade right>
                        <Box sx={{display : 'flex', justifyContent : 'flex-start', alignItems : 'center'}}>
                                   <IconButton component="span" sx={{marginLeft : '12px', color : '#000'}} size='large'>
                                        <KeyboardDoubleArrowDownIcon />
                                    </IconButton>
                                <Typography variant='h1' sx={{marginBottom : '15px', fontSize : '2rem', fontWeight : 'bold'}}>{item.title}</Typography>
                            </Box>
                         <Typography variant='body1' sx={{paddingRight : '25px',marginRight : '25px',  color : '#808080', fontWeight : 400 , lineHeight : '50px', fontSize : '30px'}}>
                            {item.description}
                         </Typography>
                        </Fade>
                        </Box>
                )
            })
        }

    </Box>
  )
}

export default RightGoals