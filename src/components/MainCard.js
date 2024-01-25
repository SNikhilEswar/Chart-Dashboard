import PropTypes from 'prop-types';
import { forwardRef } from 'react';

// material-ui
import { useTheme } from '@mui/material/styles';
import { Card, CardContent, CardHeader, Divider, Typography } from '@mui/material';

// project import
//import Highlighter from './third-party/Highlighter';

// header style
const headerSX = {
  p: 2.5,
  '& .MuiCardHeader-action': { m: '0px auto', alignSelf: 'center' }
};

// ==============================|| CUSTOM - MAIN CARD ||============================== //

// const MainCard = forwardRef(
//   (
//     {
//       border = true,
//       boxShadow,
//       children,
//       content = true,
//       contentSX = {},
//       darkTitle,
//       elevation,
//       secondary,
//       shadow,
//       sx = {},
//       title,
//       codeHighlight,
//       ...others
//     },
//     ref
//   ) => {
//     const theme = useTheme();
//     boxShadow = theme.palette.mode === 'dark' ? boxShadow || true : boxShadow;

//     return (
//       <Card
//         elevation={elevation || 0}
//         ref={ref}
//         {...others}
//         sx={{
//           border: border ? '1px solid' : 'none',
//           borderRadius: 2,
//           borderColor: theme.palette.mode === 'dark' ? theme.palette.divider : theme.palette.grey.A800,
//           boxShadow: boxShadow && (!border || theme.palette.mode === 'dark') ? shadow || theme.customShadows.z1 : 'inherit',
//           ':hover': {
//             boxShadow: boxShadow ? shadow || theme.customShadows.z1 : 'inherit'
//           },
//           '& pre': {
//             m: 0,
//             p: '16px !important',
//             fontFamily: theme.typography.fontFamily,
//             fontSize: '0.75rem'
//           },
//           ...sx
//         }}
//       >
//         {/* card header and action */}
//         {!darkTitle && title && (
//           <CardHeader sx={headerSX} titleTypographyProps={{ variant: 'subtitle1' }} title={title} action={secondary} />
//         )}
//         {darkTitle && title && <CardHeader sx={headerSX} title={<Typography variant="h3">{title}</Typography>} action={secondary} />}

//         {/* card content */}
//         {content && <CardContent sx={contentSX}>{children}</CardContent>}
//         {!content && children}

//         {/* card footer - clipboard & highlighter  */}
//         {codeHighlight && (
//           <>
//             <Divider sx={{ borderStyle: 'dashed' }} />
//             <Highlighter codeHighlight={codeHighlight} main>
//               {children}
//             </Highlighter>
//           </>
//         )}
//       </Card>
//     );
//   }
// );

// MainCard.propTypes = {
//   border: PropTypes.bool,
//   boxShadow: PropTypes.bool,
//   contentSX: PropTypes.object,
//   darkTitle: PropTypes.bool,
//   divider: PropTypes.bool,
//   elevation: PropTypes.number,
//   secondary: PropTypes.node,
//   shadow: PropTypes.string,
//   sx: PropTypes.object,
//   title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
//   codeHighlight: PropTypes.bool,
//   content: PropTypes.bool,
//   children: PropTypes.node
// };

// export default MainCard;

const MainCard = forwardRef(
  (
      {
          border = true,
          boxShadow,
          children,
          content = true,
          contentClass,
          contentSX,
          darkTitle,
          secondary,
          shadow,
          sx = {},
          title,
          ...others
      },
      ref
  ) => {
      const theme = useTheme();

      return (
          <Card
              ref={ref}
              {...others}
              sx={{
                  border: border ? '1px solid' : 'none',
                  borderColor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary[200] + 75,
                  ':hover': {
                      boxShadow: boxShadow
                          ? shadow
                              ? shadow
                              : theme.palette.mode === 'dark'
                              ? '0 2px 14px 0 rgb(33 150 243 / 10%)'
                              : '0 2px 14px 0 rgb(32 40 45 / 8%)'
                          : 'inherit'
                  },
                  ...sx
              }}
          >
              {/* card header and action */}
              {!darkTitle && title && <CardHeader sx={headerSX} title={title} action={secondary} />}
              {darkTitle && title && (
                  <CardHeader sx={headerSX} title={<Typography variant="h3">{title}</Typography>} action={secondary} />
              )}

              {/* content & header divider */}
              {title && <Divider />}

              {/* card content */}
              {content && (
                  <CardContent sx={contentSX} className={contentClass}>
                      {children}
                  </CardContent>
              )}
              {!content && children}
          </Card>
      );
  }
);

MainCard.propTypes = {
  border: PropTypes.bool,
  boxShadow: PropTypes.bool,
  children: PropTypes.node,
  content: PropTypes.bool,
  contentClass: PropTypes.string,
  contentSX: PropTypes.object,
  darkTitle: PropTypes.bool,
  secondary: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object]),
  shadow: PropTypes.string,
  sx: PropTypes.object,
  title: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.object])
};

export default MainCard;

