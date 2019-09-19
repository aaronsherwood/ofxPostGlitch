uniform sampler2DRect image;
uniform float rand;
uniform float val1;
uniform float val2;
uniform float val3;
uniform float val4;

varying vec3 pos;

void main (void)
{
    vec2 texCoord = vec2(pos.x , pos.y);

    vec4 col = texture2DRect(image,texCoord);
    vec4 col_r = texture2DRect(image,texCoord + vec2(-35.0*rand*val1,0));
    vec4 col_l = texture2DRect(image,texCoord + vec2( 35.0*rand*val1,0));
    vec4 col_g = texture2DRect(image,texCoord + vec2( -7.5*rand*val1,0));
    

    col.b = col.b + col_r.b*max(1.0,sin(pos.y*1.2)*2.5)*rand*val1;
    col.r = col.r + col_l.r*max(1.0,sin(pos.y*1.2)*2.5)*rand*val1;
    col.g = col.g + col_g.g*max(1.0,sin(pos.y*1.2)*2.5)*rand*val1;

    gl_FragColor.rgba = col.rgba;
}
