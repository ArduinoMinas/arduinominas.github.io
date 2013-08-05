
Serie_E6  = [1.0, 1.5, 2.2, 3.3, 4.7, 6.8];
Serie_E12 = [1.0, 1.2, 1.5, 1.8, 2.2, 2.7, 3.3, 3.9, 4.7, 5.6, 6.8, 8.2];	
Serie_E24 = [1.0, 1.1, 1.2, 1.3, 1.5, 1.6, 1.8, 2.0, 2.2, 2.4, 2.7, 3.0, 3.3, 3.6, 3.9, 4.3, 4.7, 5.1, 5.6, 6.2, 6.8, 7.5, 8.2, 9.1];
Serie_E48 = [1.00, 1.05, 1.10 ,1.15, 1.21, 1.27, 1.33, 1.40, 1.47, 1.54, 1.62, 1.69, 1.78, 1.87, 1.96, 2.05, 2.15, 2.26, 2.37, 2.49, 2.61, 2.74, 2.87, 3.01, 3.16, 3.32, 3.48, 3.65, 3.83, 4.02, 4.22, 4.42, 4.64, 4.87, 5.11, 5.36, 5.62, 5.90, 6.19, 6.49, 6.81, 7.15, 7.50, 7.87, 8.25, 8.66, 9.09, 9.53];
Serie_E96 = [1.00, 1.02, 1.05, 1.07, 1.10, 1.13, 1.15, 1.18, 1.21, 1.24, 1.27, 1.30, 1.33, 1.37, 1.40, 1.43, 1.47, 1.50, 1.54, 1.58, 1.62, 1.65, 1.69, 1.74, 1.78, 1.82, 1.87, 1.91, 1.96, 2.00, 2.05, 2.10, 2.15, 2.21, 2.26, 2.32, 2.37, 2.43, 2.49, 2.55, 2.61, 2.67, 2.74, 2.80, 2.87, 2.94, 3.01, 3.09, 3.16, 3.24, 3.32, 3.40, 3.48, 3.57, 3.65, 3.74, 3.83, 3.92, 4.02, 4.12, 4.22, 4.32, 4.42, 4.53, 4.64, 4.75, 4.87, 4.99, 5.11, 5.23, 5.36, 5.49, 5.62, 5.76, 5.90, 6.04, 6.19, 6.34, 6.49, 6.65, 6.81, 6.98, 7.15, 7.32, 7.50, 7.68, 7.87, 8.06, 8.25, 8.45, 8.66, 8.87, 9.09, 9.31, 9.53, 9.76];
Serie_E192 = [1.00, 1.01, 1.02, 1.04, 1.05, 1.06, 1.07, 1.09, 1.10, 1.11, 1.13, 1.14, 1.15, 1.17, 1.18, 1.20, 1.21, 1.23, 1.24, 1.26, 1.27, 1.29, 1.30, 1.32, 1.33, 1.35, 1.37, 1.38, 1.40, 1.42, 1.43, 1.45, 1.47, 1.49, 1.50, 1.52, 1.54, 1.56, 1.58, 1.60, 1.62, 1.64, 1.65, 1.67, 1.69, 1.72, 1.74, 1.76, 1.78, 1.80, 1.82, 1.84, 1.87, 1.89, 1.91, 1.93, 1.96, 1.98, 2.00, 2.03, 2.05, 2.08, 2.10, 2.13, 2.15, 2.18, 2.21, 2.23, 2.26, 2.29, 2.32, 2.34, 2.37, 2.40, 2.43, 2.46, 2.49, 2.52, 2.55, 2.58, 2.61, 2.64, 2.67, 2.71, 2.74, 2.77, 2.80, 2.84, 2.87, 2.91, 2.94, 2.98, 3.01, 3.05, 3.09, 3.12, 3.16, 3.20, 3.24, 3.28, 3.32, 3.36, 3.40, 3.44, 3.48, 3.52, 3.57, 3.61, 3.65, 3.70, 3.74, 3.79, 3.83, 3.88, 3.92, 3.97, 4.02, 4.07, 4.12, 4.17, 4.22, 4.27, 4.32, 4.37, 4.42, 4.48, 4.53, 4.59, 4.64, 4.70, 4.75, 4.81, 4.87, 4.93, 4.99, 5.05, 5.11, 5.17, 5.23, 5.30, 5.36, 5.42, 5.49, 5.56, 5.62, 5.69, 5.76, 5.83, 5.90, 5.97, 6.04, 6.12, 6.19, 6.26, 6.34, 6.42, 6.49, 6.57, 6.65, 6.73, 6.81, 6.90, 6.98, 7.06, 7.15, 7.23, 7.32, 7.41, 7.50, 7.59, 7.68, 7.77, 7.87, 7.96, 8.06, 8.16, 8.25, 8.35, 8.45, 8.56, 8.66, 8.76, 8.87, 8.98, 9.09, 9.19, 9.31, 9.42, 9.53, 9.65, 9.76, 9.88];
var Es = new Array();
var inputMultiplier = 1;

function pageLoaded()
{
  $('#series12').attr('checked', true);
  serclick( 12 );
}

function serclick( ser )
{
  Es = new Array();
  if( ser == 12 )
    Es = E12;
  else if( ser == 24 )
    Es = E24;
  else
    for( i=0; i<ser; i++ )
      Es[i] = (Math.pow( 10, i/ser )).toFixed( 2 );
}

function multclick( ml )
{
  inputMultiplier = ml;
}

function reciprocalclick( checked )
{
  if( checked )
    $('#reciprocal').innerHTML = 1/$('#Rratio').value;
  else
    $('#reciprocal').innerHTML = "";
}

function toEng( r )
{
  if( r >= 1000000 )
  {
     r /= 1000000;
     valstr = " M";
  }
  else if( r >= 1000 )
  {
    r /= 1000;
    valstr = " K";
  }
  else
    valstr = " ";
  r = Math.round( 100*r ) / 100;
  return r.toString() + valstr + String.fromCharCode( 937 );
}

function findFirstLower( res )
{
  if( res < 1 )
    res = 1;
  var man = Math.log( res ) / Math.LN10;
  var exp = Math.floor( man );
  man = Math.floor( (man - exp) * Es.length );
  exp = Math.pow( 10, exp );
  return new Array( man, exp ); // return index into series and multiplier
}

function findNextHigher( res )
{
  var ret = new Array( 2 );
  if( res[0] < (Es.length - 1) )
  {
    ret[0] = res[0] + 1;
    ret[1] = res[1];
  }
  else
  {
    ret[0] = 0;
    ret[1] = res[1] * 10;
  }
  return ret;
}

function findBestMatch( res )
{
  var rlow = findFirstLower( res );
  var rhigh = findNextHigher( rlow );

  var errl = (Es[rlow[0]]*rlow[1] - res) / res;
  var errh = (Es[rhigh[0]]*rhigh[1] - res) / res;
  if( Math.abs( errh ) < Math.abs( errl ) )
    return rhigh;
  else
    return rlow;
}

function findBestSer( res )
{
  var thisRA = findFirstLower( res/2 );
  var R1 = Es[thisRA[0]]*thisRA[1];
  var bestErr = 1E9; var bestR1; var bestR2; var err;
  do
  {
    R2A = findBestMatch( res - R1 );
    R2 = Es[R2A[0]]*R2A[1];
    err = R1 + R2 - res;
    if( Math.abs( err ) < Math.abs( bestErr ) )
    {
      bestR1 = R1;
      bestR2 = R2;
      bestErr = err;
    }
    thisRA = findNextHigher( thisRA );
    R1 = Es[thisRA[0]]*thisRA[1];
  } while( R1 < res );
  return new Array( bestR1, bestR2 );
}

function findBestPar( res )
{
  thisRA = findFirstLower( res );
  R1 = Es[thisRA[0]]*thisRA[1];
  var bestErr = 1E9; var bestR1; var bestR2; var err;
  do
  {
    if( R1 != res ) // Avoid dividing by zero
    {
      R2A = findBestMatch( 1/(1/res - 1/R1) );
      R2 = Es[R2A[0]]*R2A[1];
      if( R2 < 1E9 )
      {
        err = R1*R2/(R1 + R2) - res;
        if( Math.abs( err ) < Math.abs( bestErr ) )
        {
          bestR1 = R1;
          bestR2 = R2;
          bestErr = err;
        }
      }
    }
    thisRA = findNextHigher( thisRA );
    R1 = Es[thisRA[0]]*thisRA[1];
  } while( R1 < 2*res );
  return new Array( bestR1, bestR2 );
}

function round100A( R )
{
  R[0] = Math.round( 100*R[0] ) / 100;
  R[1] = Math.round( 100*R[1] ) / 100;
  return R;
}

function valCalc()
{
  var dres = $('#Rvalue').value * inputMultiplier;
  var bestR = findBestMatch( dres );
  bestR = Math.round( 100*Es[bestR[0]]*bestR[1] ) / 100;
  var err = (bestR - dres) / dres;
  $('#singleR').value = toEng( bestR );
  $('#singErr').innerHTML = (100*err).toFixed( 2 ) + " %";

  bestR = round100A( findBestSer( dres ) );
  $('#ser1').value = toEng( bestR[0] );
  $('#ser2').value = toEng( bestR[1] );
  $('#serVal').value = toEng( bestR[0] + bestR[1] );
  err = (bestR[0] + bestR[1] - dres) / dres;
  $('#serErr').innerHTML = (100*err).toFixed( 2 ) + " %";

  bestR = round100A( findBestPar( dres ) );
  $('#par1').val(toEng( bestR[0] ));
  $('#par2').val(toEng( bestR[1] ));
  $('#parVal').value = toEng( bestR[0]*bestR[1]/(bestR[0] + bestR[1]) );
  err = (bestR[0]*bestR[1]/(bestR[0] + bestR[1]) - dres) / dres;
  $('#parErr').innerHTML = (100*err).toFixed( 2 ) + " %";
}

function ratioCalc()
{
  var dratio = $('#Rratio').value;
  if( $('#recipCheck').checked )
    dratio = 1/dratio;
  // $('#debug').innerHTML = dratio;
  var exp = Math.floor( Math.log( Math.sqrt( dratio*1E9 ) ) / Math.LN10 );
  exp = Math.round( Math.pow( 10, exp ) );
  var ratio; var err; var bestSingleErr = 1E9; var bestSerErr = 1E9; var bestParErr = 1E9;
  for( i in Es )
  {
    rNum = Math.round( Es[i]*exp );
    rDen = rNum / dratio;

    /* Single resistor ratio */
    rSingleA = findBestMatch( rDen );
    rSingle = Es[rSingleA[0]]*rSingleA[1];
    ratio = rNum / rSingle;
    err = ratio > dratio ? ratio / dratio : dratio / ratio; // Geometric distance
    if( err < bestSingleErr )
    {
      bestSingleErr = err;
      bestSingleRNum = rNum;
      bestSingleRDen = rSingle;
    }

    /* Series resistor ratio */
    rGroupA = findBestSer( rDen );
    ratio = rNum / (rGroupA[0] + rGroupA[1]);
    err = ratio > dratio ? ratio / dratio : dratio / ratio; // Geometric distance
    if( err < bestSerErr )
    {
      bestSerErr = err;
      bestSeriesRNum = rNum;
      bestSeriesRDen1 = rGroupA[0];
      bestSeriesRDen2 = rGroupA[1];
    }

    /* Parallel resistor ratio */
    rGroupA = findBestPar( rDen );
    ratio = rNum * (rGroupA[0] + rGroupA[1]) / (rGroupA[0] * rGroupA[1]);
    err = ratio > dratio ? ratio / dratio : dratio / ratio; // Geometric distance
    if( err < bestParErr )
    {
      bestParErr = err;
      bestParRNum = rNum;
      bestParRDen1 = rGroupA[0];
      bestParRDen2 = rGroupA[1];
    }
  }
  bestSingleRNum = Math.round( 100*bestSingleRNum ) / 100;
  bestSingleRDen = Math.round( 100*bestSingleRDen ) / 100;
  $('#ratioSingle1').value = toEng( bestSingleRNum );
  $('#ratioSingle2').value = toEng( bestSingleRDen );
  ratio = bestSingleRNum / bestSingleRDen;
  $('#ratioSingleVal').value = ratio;
  $('#ratioSingleErr').innerHTML = (100*(bestSingleErr - 1)).toFixed( 2 ) + " %";

  bestSeriesRNum = Math.round( 100*bestSeriesRNum ) / 100;
  bestSeriesRDen1 = Math.round( 100*bestSeriesRDen1) / 100;
  bestSeriesRDen2 = Math.round( 100*bestSeriesRDen2) / 100;
  $('#ratioSeries1').value = toEng( bestSeriesRNum );
  $('#ratioSeries2').value = toEng( bestSeriesRDen1 );
  $('#ratioSeries3').value = toEng( bestSeriesRDen2 );
  ratio = bestSeriesRNum / (bestSeriesRDen1 + bestSeriesRDen2);
  $('#ratioSerVal').value = ratio;
  $('#ratioSerErr').innerHTML = (100*(bestSerErr - 1)).toFixed( 2 ) + " %";

  bestParRNum = Math.round( 100*bestParRNum) / 100;
  bestParRDen1 = Math.round( 100*bestParRDen1) / 100;
  bestParRDen2 = Math.round( 100*bestParRDen2) / 100;
  $('#ratioPar1').value = toEng( bestParRNum );
  $('#ratioPar2').value = toEng( bestParRDen1 );
  $('#ratioPar3').value = toEng( bestParRDen2 );
  ratio = bestParRNum * (bestParRDen1 + bestParRDen2) / (bestParRDen1 * bestParRDen2);
  $('#ratioParVal').value = ratio;
  $('#ratioParErr').innerHTML = (100*(bestParErr - 1)).toFixed( 2 ) + " %";
    // $('#debug').innerHTML = rDen;
}