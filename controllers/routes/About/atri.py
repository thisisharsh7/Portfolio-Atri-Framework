import json
from typing import List, Any, Optional
from fastapi import UploadFile
default_state = json.loads('{"Flex34":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex45":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex44":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex41":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex42":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex39":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex35":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex36":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex37":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex40":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex38":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex43":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex125":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex124":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex123":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"Flex122":{"styles":{"display":"","flexDirection":"row","alignItems":"stretch","justifyContent":"flex-start","flexWrap":"nowrap","alignContent":"stretch","rowGap":"","columnGap":"","alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"}},"TextBox36":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Link50":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"Link51":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"Link52":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"TextBox28":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"TextBox29":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"TextBox30":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Link53":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"TextBox31":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Link54":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"TextBox32":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Link55":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"TextBox33":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Link41":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"Link42":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"Link43":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"Link44":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"Link45":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"Link46":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"Link47":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"Link48":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"Link49":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"TextBox27":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Image10":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"TextBox26":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Image9":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"TextBox34":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"TextBox35":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Your text Here!"}},"Image34":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"Link152":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"Link153":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"Link154":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"Link155":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}},"Image33":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"alt":"No preview available","src":""}},"Link151":{"styles":{"alignSelf":"","flexGrow":"","flexShrink":"","order":"","marginTop":"","marginBottom":"","marginRight":"","marginLeft":"","paddingTop":"","paddingBottom":"","paddingRight":"","paddingLeft":"","width":"","height":"","minWidth":"","minHeight":"","maxWidth":"","maxHeight":"","overflow":"","fontFamily":"","fontWeight":400,"fontSize":"","textAlign":"left","color":"","opacity":"","fontStyle":"","borderRadius":"","borderWidth":"","borderStyle":"","borderColor":"","backgroundImage":"","backgroundColor":"","backgroundClip":"","backgroundOrigin":"","backgroundAttachment":"","backgroundPositionX":"","backgroundPositionY":"","backgroundRepeat":"","position":"static","float":"none","clear":"none","top":"","left":"","bottom":"","right":"","zIndex":"","outlineStyle":"","outlineColor":"","outlineOffset":"","outlineWidth":"","cursor":"","boxSizing":"content-box"},"custom":{"text":"Link","url":"/"}}}')
def get_defined_value(state, def_state, key):
	return state[key] if key in state else def_state[key]
class Atri:
	def __init__(self, state: Any):
		self.event_data = None
		self.event_alias = None
		global default_state
		self._setter_access_tracker = {}
		self.Flex34 = state["Flex34"]
		self.Flex45 = state["Flex45"]
		self.Flex44 = state["Flex44"]
		self.Flex41 = state["Flex41"]
		self.Flex42 = state["Flex42"]
		self.Flex39 = state["Flex39"]
		self.Flex35 = state["Flex35"]
		self.Flex36 = state["Flex36"]
		self.Flex37 = state["Flex37"]
		self.Flex40 = state["Flex40"]
		self.Flex38 = state["Flex38"]
		self.Flex43 = state["Flex43"]
		self.Flex125 = state["Flex125"]
		self.Flex124 = state["Flex124"]
		self.Flex123 = state["Flex123"]
		self.Flex122 = state["Flex122"]
		self.TextBox36 = state["TextBox36"]
		self.Link50 = state["Link50"]
		self.Link51 = state["Link51"]
		self.Link52 = state["Link52"]
		self.TextBox28 = state["TextBox28"]
		self.TextBox29 = state["TextBox29"]
		self.TextBox30 = state["TextBox30"]
		self.Link53 = state["Link53"]
		self.TextBox31 = state["TextBox31"]
		self.Link54 = state["Link54"]
		self.TextBox32 = state["TextBox32"]
		self.Link55 = state["Link55"]
		self.TextBox33 = state["TextBox33"]
		self.Link41 = state["Link41"]
		self.Link42 = state["Link42"]
		self.Link43 = state["Link43"]
		self.Link44 = state["Link44"]
		self.Link45 = state["Link45"]
		self.Link46 = state["Link46"]
		self.Link47 = state["Link47"]
		self.Link48 = state["Link48"]
		self.Link49 = state["Link49"]
		self.TextBox27 = state["TextBox27"]
		self.Image10 = state["Image10"]
		self.TextBox26 = state["TextBox26"]
		self.Image9 = state["Image9"]
		self.TextBox34 = state["TextBox34"]
		self.TextBox35 = state["TextBox35"]
		self.Image34 = state["Image34"]
		self.Link152 = state["Link152"]
		self.Link153 = state["Link153"]
		self.Link154 = state["Link154"]
		self.Link155 = state["Link155"]
		self.Image33 = state["Image33"]
		self.Link151 = state["Link151"]
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	def set_event(self, event):
		self.event_data = event["event_data"]
		self.event_alias = event["alias"]
		callback_name = event["callback_name"]
		comp = getattr(self, self.event_alias)
		setattr(comp, callback_name, True)
	@property
	def Flex34(self):
		self._getter_access_tracker["Flex34"] = {}
		return self._Flex34
	@Flex34.setter
	def Flex34(self, new_state):
		self._setter_access_tracker["Flex34"] = {}
		global default_state
		self._Flex34 = Flex(new_state, default_state["Flex34"])

	@property
	def Flex45(self):
		self._getter_access_tracker["Flex45"] = {}
		return self._Flex45
	@Flex45.setter
	def Flex45(self, new_state):
		self._setter_access_tracker["Flex45"] = {}
		global default_state
		self._Flex45 = Flex(new_state, default_state["Flex45"])

	@property
	def Flex44(self):
		self._getter_access_tracker["Flex44"] = {}
		return self._Flex44
	@Flex44.setter
	def Flex44(self, new_state):
		self._setter_access_tracker["Flex44"] = {}
		global default_state
		self._Flex44 = Flex(new_state, default_state["Flex44"])

	@property
	def Flex41(self):
		self._getter_access_tracker["Flex41"] = {}
		return self._Flex41
	@Flex41.setter
	def Flex41(self, new_state):
		self._setter_access_tracker["Flex41"] = {}
		global default_state
		self._Flex41 = Flex(new_state, default_state["Flex41"])

	@property
	def Flex42(self):
		self._getter_access_tracker["Flex42"] = {}
		return self._Flex42
	@Flex42.setter
	def Flex42(self, new_state):
		self._setter_access_tracker["Flex42"] = {}
		global default_state
		self._Flex42 = Flex(new_state, default_state["Flex42"])

	@property
	def Flex39(self):
		self._getter_access_tracker["Flex39"] = {}
		return self._Flex39
	@Flex39.setter
	def Flex39(self, new_state):
		self._setter_access_tracker["Flex39"] = {}
		global default_state
		self._Flex39 = Flex(new_state, default_state["Flex39"])

	@property
	def Flex35(self):
		self._getter_access_tracker["Flex35"] = {}
		return self._Flex35
	@Flex35.setter
	def Flex35(self, new_state):
		self._setter_access_tracker["Flex35"] = {}
		global default_state
		self._Flex35 = Flex(new_state, default_state["Flex35"])

	@property
	def Flex36(self):
		self._getter_access_tracker["Flex36"] = {}
		return self._Flex36
	@Flex36.setter
	def Flex36(self, new_state):
		self._setter_access_tracker["Flex36"] = {}
		global default_state
		self._Flex36 = Flex(new_state, default_state["Flex36"])

	@property
	def Flex37(self):
		self._getter_access_tracker["Flex37"] = {}
		return self._Flex37
	@Flex37.setter
	def Flex37(self, new_state):
		self._setter_access_tracker["Flex37"] = {}
		global default_state
		self._Flex37 = Flex(new_state, default_state["Flex37"])

	@property
	def Flex40(self):
		self._getter_access_tracker["Flex40"] = {}
		return self._Flex40
	@Flex40.setter
	def Flex40(self, new_state):
		self._setter_access_tracker["Flex40"] = {}
		global default_state
		self._Flex40 = Flex(new_state, default_state["Flex40"])

	@property
	def Flex38(self):
		self._getter_access_tracker["Flex38"] = {}
		return self._Flex38
	@Flex38.setter
	def Flex38(self, new_state):
		self._setter_access_tracker["Flex38"] = {}
		global default_state
		self._Flex38 = Flex(new_state, default_state["Flex38"])

	@property
	def Flex43(self):
		self._getter_access_tracker["Flex43"] = {}
		return self._Flex43
	@Flex43.setter
	def Flex43(self, new_state):
		self._setter_access_tracker["Flex43"] = {}
		global default_state
		self._Flex43 = Flex(new_state, default_state["Flex43"])

	@property
	def Flex125(self):
		self._getter_access_tracker["Flex125"] = {}
		return self._Flex125
	@Flex125.setter
	def Flex125(self, new_state):
		self._setter_access_tracker["Flex125"] = {}
		global default_state
		self._Flex125 = Flex(new_state, default_state["Flex125"])

	@property
	def Flex124(self):
		self._getter_access_tracker["Flex124"] = {}
		return self._Flex124
	@Flex124.setter
	def Flex124(self, new_state):
		self._setter_access_tracker["Flex124"] = {}
		global default_state
		self._Flex124 = Flex(new_state, default_state["Flex124"])

	@property
	def Flex123(self):
		self._getter_access_tracker["Flex123"] = {}
		return self._Flex123
	@Flex123.setter
	def Flex123(self, new_state):
		self._setter_access_tracker["Flex123"] = {}
		global default_state
		self._Flex123 = Flex(new_state, default_state["Flex123"])

	@property
	def Flex122(self):
		self._getter_access_tracker["Flex122"] = {}
		return self._Flex122
	@Flex122.setter
	def Flex122(self, new_state):
		self._setter_access_tracker["Flex122"] = {}
		global default_state
		self._Flex122 = Flex(new_state, default_state["Flex122"])

	@property
	def TextBox36(self):
		self._getter_access_tracker["TextBox36"] = {}
		return self._TextBox36
	@TextBox36.setter
	def TextBox36(self, new_state):
		self._setter_access_tracker["TextBox36"] = {}
		global default_state
		self._TextBox36 = TextBox(new_state, default_state["TextBox36"])

	@property
	def Link50(self):
		self._getter_access_tracker["Link50"] = {}
		return self._Link50
	@Link50.setter
	def Link50(self, new_state):
		self._setter_access_tracker["Link50"] = {}
		global default_state
		self._Link50 = Link(new_state, default_state["Link50"])

	@property
	def Link51(self):
		self._getter_access_tracker["Link51"] = {}
		return self._Link51
	@Link51.setter
	def Link51(self, new_state):
		self._setter_access_tracker["Link51"] = {}
		global default_state
		self._Link51 = Link(new_state, default_state["Link51"])

	@property
	def Link52(self):
		self._getter_access_tracker["Link52"] = {}
		return self._Link52
	@Link52.setter
	def Link52(self, new_state):
		self._setter_access_tracker["Link52"] = {}
		global default_state
		self._Link52 = Link(new_state, default_state["Link52"])

	@property
	def TextBox28(self):
		self._getter_access_tracker["TextBox28"] = {}
		return self._TextBox28
	@TextBox28.setter
	def TextBox28(self, new_state):
		self._setter_access_tracker["TextBox28"] = {}
		global default_state
		self._TextBox28 = TextBox(new_state, default_state["TextBox28"])

	@property
	def TextBox29(self):
		self._getter_access_tracker["TextBox29"] = {}
		return self._TextBox29
	@TextBox29.setter
	def TextBox29(self, new_state):
		self._setter_access_tracker["TextBox29"] = {}
		global default_state
		self._TextBox29 = TextBox(new_state, default_state["TextBox29"])

	@property
	def TextBox30(self):
		self._getter_access_tracker["TextBox30"] = {}
		return self._TextBox30
	@TextBox30.setter
	def TextBox30(self, new_state):
		self._setter_access_tracker["TextBox30"] = {}
		global default_state
		self._TextBox30 = TextBox(new_state, default_state["TextBox30"])

	@property
	def Link53(self):
		self._getter_access_tracker["Link53"] = {}
		return self._Link53
	@Link53.setter
	def Link53(self, new_state):
		self._setter_access_tracker["Link53"] = {}
		global default_state
		self._Link53 = Link(new_state, default_state["Link53"])

	@property
	def TextBox31(self):
		self._getter_access_tracker["TextBox31"] = {}
		return self._TextBox31
	@TextBox31.setter
	def TextBox31(self, new_state):
		self._setter_access_tracker["TextBox31"] = {}
		global default_state
		self._TextBox31 = TextBox(new_state, default_state["TextBox31"])

	@property
	def Link54(self):
		self._getter_access_tracker["Link54"] = {}
		return self._Link54
	@Link54.setter
	def Link54(self, new_state):
		self._setter_access_tracker["Link54"] = {}
		global default_state
		self._Link54 = Link(new_state, default_state["Link54"])

	@property
	def TextBox32(self):
		self._getter_access_tracker["TextBox32"] = {}
		return self._TextBox32
	@TextBox32.setter
	def TextBox32(self, new_state):
		self._setter_access_tracker["TextBox32"] = {}
		global default_state
		self._TextBox32 = TextBox(new_state, default_state["TextBox32"])

	@property
	def Link55(self):
		self._getter_access_tracker["Link55"] = {}
		return self._Link55
	@Link55.setter
	def Link55(self, new_state):
		self._setter_access_tracker["Link55"] = {}
		global default_state
		self._Link55 = Link(new_state, default_state["Link55"])

	@property
	def TextBox33(self):
		self._getter_access_tracker["TextBox33"] = {}
		return self._TextBox33
	@TextBox33.setter
	def TextBox33(self, new_state):
		self._setter_access_tracker["TextBox33"] = {}
		global default_state
		self._TextBox33 = TextBox(new_state, default_state["TextBox33"])

	@property
	def Link41(self):
		self._getter_access_tracker["Link41"] = {}
		return self._Link41
	@Link41.setter
	def Link41(self, new_state):
		self._setter_access_tracker["Link41"] = {}
		global default_state
		self._Link41 = Link(new_state, default_state["Link41"])

	@property
	def Link42(self):
		self._getter_access_tracker["Link42"] = {}
		return self._Link42
	@Link42.setter
	def Link42(self, new_state):
		self._setter_access_tracker["Link42"] = {}
		global default_state
		self._Link42 = Link(new_state, default_state["Link42"])

	@property
	def Link43(self):
		self._getter_access_tracker["Link43"] = {}
		return self._Link43
	@Link43.setter
	def Link43(self, new_state):
		self._setter_access_tracker["Link43"] = {}
		global default_state
		self._Link43 = Link(new_state, default_state["Link43"])

	@property
	def Link44(self):
		self._getter_access_tracker["Link44"] = {}
		return self._Link44
	@Link44.setter
	def Link44(self, new_state):
		self._setter_access_tracker["Link44"] = {}
		global default_state
		self._Link44 = Link(new_state, default_state["Link44"])

	@property
	def Link45(self):
		self._getter_access_tracker["Link45"] = {}
		return self._Link45
	@Link45.setter
	def Link45(self, new_state):
		self._setter_access_tracker["Link45"] = {}
		global default_state
		self._Link45 = Link(new_state, default_state["Link45"])

	@property
	def Link46(self):
		self._getter_access_tracker["Link46"] = {}
		return self._Link46
	@Link46.setter
	def Link46(self, new_state):
		self._setter_access_tracker["Link46"] = {}
		global default_state
		self._Link46 = Link(new_state, default_state["Link46"])

	@property
	def Link47(self):
		self._getter_access_tracker["Link47"] = {}
		return self._Link47
	@Link47.setter
	def Link47(self, new_state):
		self._setter_access_tracker["Link47"] = {}
		global default_state
		self._Link47 = Link(new_state, default_state["Link47"])

	@property
	def Link48(self):
		self._getter_access_tracker["Link48"] = {}
		return self._Link48
	@Link48.setter
	def Link48(self, new_state):
		self._setter_access_tracker["Link48"] = {}
		global default_state
		self._Link48 = Link(new_state, default_state["Link48"])

	@property
	def Link49(self):
		self._getter_access_tracker["Link49"] = {}
		return self._Link49
	@Link49.setter
	def Link49(self, new_state):
		self._setter_access_tracker["Link49"] = {}
		global default_state
		self._Link49 = Link(new_state, default_state["Link49"])

	@property
	def TextBox27(self):
		self._getter_access_tracker["TextBox27"] = {}
		return self._TextBox27
	@TextBox27.setter
	def TextBox27(self, new_state):
		self._setter_access_tracker["TextBox27"] = {}
		global default_state
		self._TextBox27 = TextBox(new_state, default_state["TextBox27"])

	@property
	def Image10(self):
		self._getter_access_tracker["Image10"] = {}
		return self._Image10
	@Image10.setter
	def Image10(self, new_state):
		self._setter_access_tracker["Image10"] = {}
		global default_state
		self._Image10 = Image(new_state, default_state["Image10"])

	@property
	def TextBox26(self):
		self._getter_access_tracker["TextBox26"] = {}
		return self._TextBox26
	@TextBox26.setter
	def TextBox26(self, new_state):
		self._setter_access_tracker["TextBox26"] = {}
		global default_state
		self._TextBox26 = TextBox(new_state, default_state["TextBox26"])

	@property
	def Image9(self):
		self._getter_access_tracker["Image9"] = {}
		return self._Image9
	@Image9.setter
	def Image9(self, new_state):
		self._setter_access_tracker["Image9"] = {}
		global default_state
		self._Image9 = Image(new_state, default_state["Image9"])

	@property
	def TextBox34(self):
		self._getter_access_tracker["TextBox34"] = {}
		return self._TextBox34
	@TextBox34.setter
	def TextBox34(self, new_state):
		self._setter_access_tracker["TextBox34"] = {}
		global default_state
		self._TextBox34 = TextBox(new_state, default_state["TextBox34"])

	@property
	def TextBox35(self):
		self._getter_access_tracker["TextBox35"] = {}
		return self._TextBox35
	@TextBox35.setter
	def TextBox35(self, new_state):
		self._setter_access_tracker["TextBox35"] = {}
		global default_state
		self._TextBox35 = TextBox(new_state, default_state["TextBox35"])

	@property
	def Image34(self):
		self._getter_access_tracker["Image34"] = {}
		return self._Image34
	@Image34.setter
	def Image34(self, new_state):
		self._setter_access_tracker["Image34"] = {}
		global default_state
		self._Image34 = Image(new_state, default_state["Image34"])

	@property
	def Link152(self):
		self._getter_access_tracker["Link152"] = {}
		return self._Link152
	@Link152.setter
	def Link152(self, new_state):
		self._setter_access_tracker["Link152"] = {}
		global default_state
		self._Link152 = Link(new_state, default_state["Link152"])

	@property
	def Link153(self):
		self._getter_access_tracker["Link153"] = {}
		return self._Link153
	@Link153.setter
	def Link153(self, new_state):
		self._setter_access_tracker["Link153"] = {}
		global default_state
		self._Link153 = Link(new_state, default_state["Link153"])

	@property
	def Link154(self):
		self._getter_access_tracker["Link154"] = {}
		return self._Link154
	@Link154.setter
	def Link154(self, new_state):
		self._setter_access_tracker["Link154"] = {}
		global default_state
		self._Link154 = Link(new_state, default_state["Link154"])

	@property
	def Link155(self):
		self._getter_access_tracker["Link155"] = {}
		return self._Link155
	@Link155.setter
	def Link155(self, new_state):
		self._setter_access_tracker["Link155"] = {}
		global default_state
		self._Link155 = Link(new_state, default_state["Link155"])

	@property
	def Image33(self):
		self._getter_access_tracker["Image33"] = {}
		return self._Image33
	@Image33.setter
	def Image33(self, new_state):
		self._setter_access_tracker["Image33"] = {}
		global default_state
		self._Image33 = Image(new_state, default_state["Image33"])

	@property
	def Link151(self):
		self._getter_access_tracker["Link151"] = {}
		return self._Link151
	@Link151.setter
	def Link151(self, new_state):
		self._setter_access_tracker["Link151"] = {}
		global default_state
		self._Link151 = Link(new_state, default_state["Link151"])

	def _to_json_fields(self):
		return {
			"Flex34": self._Flex34,
			"Flex45": self._Flex45,
			"Flex44": self._Flex44,
			"Flex41": self._Flex41,
			"Flex42": self._Flex42,
			"Flex39": self._Flex39,
			"Flex35": self._Flex35,
			"Flex36": self._Flex36,
			"Flex37": self._Flex37,
			"Flex40": self._Flex40,
			"Flex38": self._Flex38,
			"Flex43": self._Flex43,
			"Flex125": self._Flex125,
			"Flex124": self._Flex124,
			"Flex123": self._Flex123,
			"Flex122": self._Flex122,
			"TextBox36": self._TextBox36,
			"Link50": self._Link50,
			"Link51": self._Link51,
			"Link52": self._Link52,
			"TextBox28": self._TextBox28,
			"TextBox29": self._TextBox29,
			"TextBox30": self._TextBox30,
			"Link53": self._Link53,
			"TextBox31": self._TextBox31,
			"Link54": self._Link54,
			"TextBox32": self._TextBox32,
			"Link55": self._Link55,
			"TextBox33": self._TextBox33,
			"Link41": self._Link41,
			"Link42": self._Link42,
			"Link43": self._Link43,
			"Link44": self._Link44,
			"Link45": self._Link45,
			"Link46": self._Link46,
			"Link47": self._Link47,
			"Link48": self._Link48,
			"Link49": self._Link49,
			"TextBox27": self._TextBox27,
			"Image10": self._Image10,
			"TextBox26": self._TextBox26,
			"Image9": self._Image9,
			"TextBox34": self._TextBox34,
			"TextBox35": self._TextBox35,
			"Image34": self._Image34,
			"Link152": self._Link152,
			"Link153": self._Link153,
			"Link154": self._Link154,
			"Link155": self._Link155,
			"Image33": self._Image33,
			"Link151": self._Link151,
			}


class FlexstylesClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.display: str = get_defined_value(state, def_state, "display")
		self.flexDirection: str = get_defined_value(state, def_state, "flexDirection")
		self.alignItems: str = get_defined_value(state, def_state, "alignItems")
		self.justifyContent: str = get_defined_value(state, def_state, "justifyContent")
		self.flexWrap: str = get_defined_value(state, def_state, "flexWrap")
		self.alignContent: str = get_defined_value(state, def_state, "alignContent")
		self.rowGap: str = get_defined_value(state, def_state, "rowGap")
		self.columnGap: str = get_defined_value(state, def_state, "columnGap")
		self.alignSelf: str = get_defined_value(state, def_state, "alignSelf")
		self.flexGrow: str = get_defined_value(state, def_state, "flexGrow")
		self.flexShrink: str = get_defined_value(state, def_state, "flexShrink")
		self.order: str = get_defined_value(state, def_state, "order")
		self.marginTop: str = get_defined_value(state, def_state, "marginTop")
		self.marginBottom: str = get_defined_value(state, def_state, "marginBottom")
		self.marginRight: str = get_defined_value(state, def_state, "marginRight")
		self.marginLeft: str = get_defined_value(state, def_state, "marginLeft")
		self.paddingTop: str = get_defined_value(state, def_state, "paddingTop")
		self.paddingBottom: str = get_defined_value(state, def_state, "paddingBottom")
		self.paddingRight: str = get_defined_value(state, def_state, "paddingRight")
		self.paddingLeft: str = get_defined_value(state, def_state, "paddingLeft")
		self.width: str = get_defined_value(state, def_state, "width")
		self.height: str = get_defined_value(state, def_state, "height")
		self.minWidth: str = get_defined_value(state, def_state, "minWidth")
		self.minHeight: str = get_defined_value(state, def_state, "minHeight")
		self.maxWidth: str = get_defined_value(state, def_state, "maxWidth")
		self.maxHeight: str = get_defined_value(state, def_state, "maxHeight")
		self.overflow: str = get_defined_value(state, def_state, "overflow")
		self.fontFamily: str = get_defined_value(state, def_state, "fontFamily")
		self.fontWeight: int = get_defined_value(state, def_state, "fontWeight")
		self.fontSize: str = get_defined_value(state, def_state, "fontSize")
		self.textAlign: str = get_defined_value(state, def_state, "textAlign")
		self.color: str = get_defined_value(state, def_state, "color")
		self.opacity: str = get_defined_value(state, def_state, "opacity")
		self.fontStyle: str = get_defined_value(state, def_state, "fontStyle")
		self.borderRadius: str = get_defined_value(state, def_state, "borderRadius")
		self.borderWidth: str = get_defined_value(state, def_state, "borderWidth")
		self.borderStyle: str = get_defined_value(state, def_state, "borderStyle")
		self.borderColor: str = get_defined_value(state, def_state, "borderColor")
		self.backgroundImage: str = get_defined_value(state, def_state, "backgroundImage")
		self.backgroundColor: str = get_defined_value(state, def_state, "backgroundColor")
		self.backgroundClip: str = get_defined_value(state, def_state, "backgroundClip")
		self.backgroundOrigin: str = get_defined_value(state, def_state, "backgroundOrigin")
		self.backgroundAttachment: str = get_defined_value(state, def_state, "backgroundAttachment")
		self.backgroundPositionX: str = get_defined_value(state, def_state, "backgroundPositionX")
		self.backgroundPositionY: str = get_defined_value(state, def_state, "backgroundPositionY")
		self.backgroundRepeat: str = get_defined_value(state, def_state, "backgroundRepeat")
		self.position: str = get_defined_value(state, def_state, "position")
		self.float: str = get_defined_value(state, def_state, "float")
		self.clear: str = get_defined_value(state, def_state, "clear")
		self.top: str = get_defined_value(state, def_state, "top")
		self.left: str = get_defined_value(state, def_state, "left")
		self.bottom: str = get_defined_value(state, def_state, "bottom")
		self.right: str = get_defined_value(state, def_state, "right")
		self.zIndex: str = get_defined_value(state, def_state, "zIndex")
		self.outlineStyle: str = get_defined_value(state, def_state, "outlineStyle")
		self.outlineColor: str = get_defined_value(state, def_state, "outlineColor")
		self.outlineOffset: str = get_defined_value(state, def_state, "outlineOffset")
		self.outlineWidth: str = get_defined_value(state, def_state, "outlineWidth")
		self.cursor: str = get_defined_value(state, def_state, "cursor")
		self.boxSizing: str = get_defined_value(state, def_state, "boxSizing")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def display(self):
		self._getter_access_tracker["display"] = {}
		return self._display
	@display.setter
	def display(self, state):
		self._setter_access_tracker["display"] = {}
		self._display = state
	@property
	def flexDirection(self):
		self._getter_access_tracker["flexDirection"] = {}
		return self._flexDirection
	@flexDirection.setter
	def flexDirection(self, state):
		self._setter_access_tracker["flexDirection"] = {}
		self._flexDirection = state
	@property
	def alignItems(self):
		self._getter_access_tracker["alignItems"] = {}
		return self._alignItems
	@alignItems.setter
	def alignItems(self, state):
		self._setter_access_tracker["alignItems"] = {}
		self._alignItems = state
	@property
	def justifyContent(self):
		self._getter_access_tracker["justifyContent"] = {}
		return self._justifyContent
	@justifyContent.setter
	def justifyContent(self, state):
		self._setter_access_tracker["justifyContent"] = {}
		self._justifyContent = state
	@property
	def flexWrap(self):
		self._getter_access_tracker["flexWrap"] = {}
		return self._flexWrap
	@flexWrap.setter
	def flexWrap(self, state):
		self._setter_access_tracker["flexWrap"] = {}
		self._flexWrap = state
	@property
	def alignContent(self):
		self._getter_access_tracker["alignContent"] = {}
		return self._alignContent
	@alignContent.setter
	def alignContent(self, state):
		self._setter_access_tracker["alignContent"] = {}
		self._alignContent = state
	@property
	def rowGap(self):
		self._getter_access_tracker["rowGap"] = {}
		return self._rowGap
	@rowGap.setter
	def rowGap(self, state):
		self._setter_access_tracker["rowGap"] = {}
		self._rowGap = state
	@property
	def columnGap(self):
		self._getter_access_tracker["columnGap"] = {}
		return self._columnGap
	@columnGap.setter
	def columnGap(self, state):
		self._setter_access_tracker["columnGap"] = {}
		self._columnGap = state
	@property
	def alignSelf(self):
		self._getter_access_tracker["alignSelf"] = {}
		return self._alignSelf
	@alignSelf.setter
	def alignSelf(self, state):
		self._setter_access_tracker["alignSelf"] = {}
		self._alignSelf = state
	@property
	def flexGrow(self):
		self._getter_access_tracker["flexGrow"] = {}
		return self._flexGrow
	@flexGrow.setter
	def flexGrow(self, state):
		self._setter_access_tracker["flexGrow"] = {}
		self._flexGrow = state
	@property
	def flexShrink(self):
		self._getter_access_tracker["flexShrink"] = {}
		return self._flexShrink
	@flexShrink.setter
	def flexShrink(self, state):
		self._setter_access_tracker["flexShrink"] = {}
		self._flexShrink = state
	@property
	def order(self):
		self._getter_access_tracker["order"] = {}
		return self._order
	@order.setter
	def order(self, state):
		self._setter_access_tracker["order"] = {}
		self._order = state
	@property
	def marginTop(self):
		self._getter_access_tracker["marginTop"] = {}
		return self._marginTop
	@marginTop.setter
	def marginTop(self, state):
		self._setter_access_tracker["marginTop"] = {}
		self._marginTop = state
	@property
	def marginBottom(self):
		self._getter_access_tracker["marginBottom"] = {}
		return self._marginBottom
	@marginBottom.setter
	def marginBottom(self, state):
		self._setter_access_tracker["marginBottom"] = {}
		self._marginBottom = state
	@property
	def marginRight(self):
		self._getter_access_tracker["marginRight"] = {}
		return self._marginRight
	@marginRight.setter
	def marginRight(self, state):
		self._setter_access_tracker["marginRight"] = {}
		self._marginRight = state
	@property
	def marginLeft(self):
		self._getter_access_tracker["marginLeft"] = {}
		return self._marginLeft
	@marginLeft.setter
	def marginLeft(self, state):
		self._setter_access_tracker["marginLeft"] = {}
		self._marginLeft = state
	@property
	def paddingTop(self):
		self._getter_access_tracker["paddingTop"] = {}
		return self._paddingTop
	@paddingTop.setter
	def paddingTop(self, state):
		self._setter_access_tracker["paddingTop"] = {}
		self._paddingTop = state
	@property
	def paddingBottom(self):
		self._getter_access_tracker["paddingBottom"] = {}
		return self._paddingBottom
	@paddingBottom.setter
	def paddingBottom(self, state):
		self._setter_access_tracker["paddingBottom"] = {}
		self._paddingBottom = state
	@property
	def paddingRight(self):
		self._getter_access_tracker["paddingRight"] = {}
		return self._paddingRight
	@paddingRight.setter
	def paddingRight(self, state):
		self._setter_access_tracker["paddingRight"] = {}
		self._paddingRight = state
	@property
	def paddingLeft(self):
		self._getter_access_tracker["paddingLeft"] = {}
		return self._paddingLeft
	@paddingLeft.setter
	def paddingLeft(self, state):
		self._setter_access_tracker["paddingLeft"] = {}
		self._paddingLeft = state
	@property
	def width(self):
		self._getter_access_tracker["width"] = {}
		return self._width
	@width.setter
	def width(self, state):
		self._setter_access_tracker["width"] = {}
		self._width = state
	@property
	def height(self):
		self._getter_access_tracker["height"] = {}
		return self._height
	@height.setter
	def height(self, state):
		self._setter_access_tracker["height"] = {}
		self._height = state
	@property
	def minWidth(self):
		self._getter_access_tracker["minWidth"] = {}
		return self._minWidth
	@minWidth.setter
	def minWidth(self, state):
		self._setter_access_tracker["minWidth"] = {}
		self._minWidth = state
	@property
	def minHeight(self):
		self._getter_access_tracker["minHeight"] = {}
		return self._minHeight
	@minHeight.setter
	def minHeight(self, state):
		self._setter_access_tracker["minHeight"] = {}
		self._minHeight = state
	@property
	def maxWidth(self):
		self._getter_access_tracker["maxWidth"] = {}
		return self._maxWidth
	@maxWidth.setter
	def maxWidth(self, state):
		self._setter_access_tracker["maxWidth"] = {}
		self._maxWidth = state
	@property
	def maxHeight(self):
		self._getter_access_tracker["maxHeight"] = {}
		return self._maxHeight
	@maxHeight.setter
	def maxHeight(self, state):
		self._setter_access_tracker["maxHeight"] = {}
		self._maxHeight = state
	@property
	def overflow(self):
		self._getter_access_tracker["overflow"] = {}
		return self._overflow
	@overflow.setter
	def overflow(self, state):
		self._setter_access_tracker["overflow"] = {}
		self._overflow = state
	@property
	def fontFamily(self):
		self._getter_access_tracker["fontFamily"] = {}
		return self._fontFamily
	@fontFamily.setter
	def fontFamily(self, state):
		self._setter_access_tracker["fontFamily"] = {}
		self._fontFamily = state
	@property
	def fontWeight(self):
		self._getter_access_tracker["fontWeight"] = {}
		return self._fontWeight
	@fontWeight.setter
	def fontWeight(self, state):
		self._setter_access_tracker["fontWeight"] = {}
		self._fontWeight = state
	@property
	def fontSize(self):
		self._getter_access_tracker["fontSize"] = {}
		return self._fontSize
	@fontSize.setter
	def fontSize(self, state):
		self._setter_access_tracker["fontSize"] = {}
		self._fontSize = state
	@property
	def textAlign(self):
		self._getter_access_tracker["textAlign"] = {}
		return self._textAlign
	@textAlign.setter
	def textAlign(self, state):
		self._setter_access_tracker["textAlign"] = {}
		self._textAlign = state
	@property
	def color(self):
		self._getter_access_tracker["color"] = {}
		return self._color
	@color.setter
	def color(self, state):
		self._setter_access_tracker["color"] = {}
		self._color = state
	@property
	def opacity(self):
		self._getter_access_tracker["opacity"] = {}
		return self._opacity
	@opacity.setter
	def opacity(self, state):
		self._setter_access_tracker["opacity"] = {}
		self._opacity = state
	@property
	def fontStyle(self):
		self._getter_access_tracker["fontStyle"] = {}
		return self._fontStyle
	@fontStyle.setter
	def fontStyle(self, state):
		self._setter_access_tracker["fontStyle"] = {}
		self._fontStyle = state
	@property
	def borderRadius(self):
		self._getter_access_tracker["borderRadius"] = {}
		return self._borderRadius
	@borderRadius.setter
	def borderRadius(self, state):
		self._setter_access_tracker["borderRadius"] = {}
		self._borderRadius = state
	@property
	def borderWidth(self):
		self._getter_access_tracker["borderWidth"] = {}
		return self._borderWidth
	@borderWidth.setter
	def borderWidth(self, state):
		self._setter_access_tracker["borderWidth"] = {}
		self._borderWidth = state
	@property
	def borderStyle(self):
		self._getter_access_tracker["borderStyle"] = {}
		return self._borderStyle
	@borderStyle.setter
	def borderStyle(self, state):
		self._setter_access_tracker["borderStyle"] = {}
		self._borderStyle = state
	@property
	def borderColor(self):
		self._getter_access_tracker["borderColor"] = {}
		return self._borderColor
	@borderColor.setter
	def borderColor(self, state):
		self._setter_access_tracker["borderColor"] = {}
		self._borderColor = state
	@property
	def backgroundImage(self):
		self._getter_access_tracker["backgroundImage"] = {}
		return self._backgroundImage
	@backgroundImage.setter
	def backgroundImage(self, state):
		self._setter_access_tracker["backgroundImage"] = {}
		self._backgroundImage = state
	@property
	def backgroundColor(self):
		self._getter_access_tracker["backgroundColor"] = {}
		return self._backgroundColor
	@backgroundColor.setter
	def backgroundColor(self, state):
		self._setter_access_tracker["backgroundColor"] = {}
		self._backgroundColor = state
	@property
	def backgroundClip(self):
		self._getter_access_tracker["backgroundClip"] = {}
		return self._backgroundClip
	@backgroundClip.setter
	def backgroundClip(self, state):
		self._setter_access_tracker["backgroundClip"] = {}
		self._backgroundClip = state
	@property
	def backgroundOrigin(self):
		self._getter_access_tracker["backgroundOrigin"] = {}
		return self._backgroundOrigin
	@backgroundOrigin.setter
	def backgroundOrigin(self, state):
		self._setter_access_tracker["backgroundOrigin"] = {}
		self._backgroundOrigin = state
	@property
	def backgroundAttachment(self):
		self._getter_access_tracker["backgroundAttachment"] = {}
		return self._backgroundAttachment
	@backgroundAttachment.setter
	def backgroundAttachment(self, state):
		self._setter_access_tracker["backgroundAttachment"] = {}
		self._backgroundAttachment = state
	@property
	def backgroundPositionX(self):
		self._getter_access_tracker["backgroundPositionX"] = {}
		return self._backgroundPositionX
	@backgroundPositionX.setter
	def backgroundPositionX(self, state):
		self._setter_access_tracker["backgroundPositionX"] = {}
		self._backgroundPositionX = state
	@property
	def backgroundPositionY(self):
		self._getter_access_tracker["backgroundPositionY"] = {}
		return self._backgroundPositionY
	@backgroundPositionY.setter
	def backgroundPositionY(self, state):
		self._setter_access_tracker["backgroundPositionY"] = {}
		self._backgroundPositionY = state
	@property
	def backgroundRepeat(self):
		self._getter_access_tracker["backgroundRepeat"] = {}
		return self._backgroundRepeat
	@backgroundRepeat.setter
	def backgroundRepeat(self, state):
		self._setter_access_tracker["backgroundRepeat"] = {}
		self._backgroundRepeat = state
	@property
	def position(self):
		self._getter_access_tracker["position"] = {}
		return self._position
	@position.setter
	def position(self, state):
		self._setter_access_tracker["position"] = {}
		self._position = state
	@property
	def float(self):
		self._getter_access_tracker["float"] = {}
		return self._float
	@float.setter
	def float(self, state):
		self._setter_access_tracker["float"] = {}
		self._float = state
	@property
	def clear(self):
		self._getter_access_tracker["clear"] = {}
		return self._clear
	@clear.setter
	def clear(self, state):
		self._setter_access_tracker["clear"] = {}
		self._clear = state
	@property
	def top(self):
		self._getter_access_tracker["top"] = {}
		return self._top
	@top.setter
	def top(self, state):
		self._setter_access_tracker["top"] = {}
		self._top = state
	@property
	def left(self):
		self._getter_access_tracker["left"] = {}
		return self._left
	@left.setter
	def left(self, state):
		self._setter_access_tracker["left"] = {}
		self._left = state
	@property
	def bottom(self):
		self._getter_access_tracker["bottom"] = {}
		return self._bottom
	@bottom.setter
	def bottom(self, state):
		self._setter_access_tracker["bottom"] = {}
		self._bottom = state
	@property
	def right(self):
		self._getter_access_tracker["right"] = {}
		return self._right
	@right.setter
	def right(self, state):
		self._setter_access_tracker["right"] = {}
		self._right = state
	@property
	def zIndex(self):
		self._getter_access_tracker["zIndex"] = {}
		return self._zIndex
	@zIndex.setter
	def zIndex(self, state):
		self._setter_access_tracker["zIndex"] = {}
		self._zIndex = state
	@property
	def outlineStyle(self):
		self._getter_access_tracker["outlineStyle"] = {}
		return self._outlineStyle
	@outlineStyle.setter
	def outlineStyle(self, state):
		self._setter_access_tracker["outlineStyle"] = {}
		self._outlineStyle = state
	@property
	def outlineColor(self):
		self._getter_access_tracker["outlineColor"] = {}
		return self._outlineColor
	@outlineColor.setter
	def outlineColor(self, state):
		self._setter_access_tracker["outlineColor"] = {}
		self._outlineColor = state
	@property
	def outlineOffset(self):
		self._getter_access_tracker["outlineOffset"] = {}
		return self._outlineOffset
	@outlineOffset.setter
	def outlineOffset(self, state):
		self._setter_access_tracker["outlineOffset"] = {}
		self._outlineOffset = state
	@property
	def outlineWidth(self):
		self._getter_access_tracker["outlineWidth"] = {}
		return self._outlineWidth
	@outlineWidth.setter
	def outlineWidth(self, state):
		self._setter_access_tracker["outlineWidth"] = {}
		self._outlineWidth = state
	@property
	def cursor(self):
		self._getter_access_tracker["cursor"] = {}
		return self._cursor
	@cursor.setter
	def cursor(self, state):
		self._setter_access_tracker["cursor"] = {}
		self._cursor = state
	@property
	def boxSizing(self):
		self._getter_access_tracker["boxSizing"] = {}
		return self._boxSizing
	@boxSizing.setter
	def boxSizing(self, state):
		self._setter_access_tracker["boxSizing"] = {}
		self._boxSizing = state
	def _to_json_fields(self):
		return {
			"display": self._display,
			"flexDirection": self._flexDirection,
			"alignItems": self._alignItems,
			"justifyContent": self._justifyContent,
			"flexWrap": self._flexWrap,
			"alignContent": self._alignContent,
			"rowGap": self._rowGap,
			"columnGap": self._columnGap,
			"alignSelf": self._alignSelf,
			"flexGrow": self._flexGrow,
			"flexShrink": self._flexShrink,
			"order": self._order,
			"marginTop": self._marginTop,
			"marginBottom": self._marginBottom,
			"marginRight": self._marginRight,
			"marginLeft": self._marginLeft,
			"paddingTop": self._paddingTop,
			"paddingBottom": self._paddingBottom,
			"paddingRight": self._paddingRight,
			"paddingLeft": self._paddingLeft,
			"width": self._width,
			"height": self._height,
			"minWidth": self._minWidth,
			"minHeight": self._minHeight,
			"maxWidth": self._maxWidth,
			"maxHeight": self._maxHeight,
			"overflow": self._overflow,
			"fontFamily": self._fontFamily,
			"fontWeight": self._fontWeight,
			"fontSize": self._fontSize,
			"textAlign": self._textAlign,
			"color": self._color,
			"opacity": self._opacity,
			"fontStyle": self._fontStyle,
			"borderRadius": self._borderRadius,
			"borderWidth": self._borderWidth,
			"borderStyle": self._borderStyle,
			"borderColor": self._borderColor,
			"backgroundImage": self._backgroundImage,
			"backgroundColor": self._backgroundColor,
			"backgroundClip": self._backgroundClip,
			"backgroundOrigin": self._backgroundOrigin,
			"backgroundAttachment": self._backgroundAttachment,
			"backgroundPositionX": self._backgroundPositionX,
			"backgroundPositionY": self._backgroundPositionY,
			"backgroundRepeat": self._backgroundRepeat,
			"position": self._position,
			"float": self._float,
			"clear": self._clear,
			"top": self._top,
			"left": self._left,
			"bottom": self._bottom,
			"right": self._right,
			"zIndex": self._zIndex,
			"outlineStyle": self._outlineStyle,
			"outlineColor": self._outlineColor,
			"outlineOffset": self._outlineOffset,
			"outlineWidth": self._outlineWidth,
			"cursor": self._cursor,
			"boxSizing": self._boxSizing,
			}


class Flex:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state
		self.onClick = False
		self.styles: FlexstylesClass = get_defined_value(state, def_state, "styles")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def styles(self):
		self._getter_access_tracker["styles"] = {}
		return self._styles
	@styles.setter
	def styles(self, state):
		self._setter_access_tracker["styles"] = {}
		self._styles = FlexstylesClass(state, self._def_state["styles"])
	def _to_json_fields(self):
		return {
			"styles": self._styles,
			}


class TextBoxstylesClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.alignSelf: str = get_defined_value(state, def_state, "alignSelf")
		self.flexGrow: str = get_defined_value(state, def_state, "flexGrow")
		self.flexShrink: str = get_defined_value(state, def_state, "flexShrink")
		self.order: str = get_defined_value(state, def_state, "order")
		self.marginTop: str = get_defined_value(state, def_state, "marginTop")
		self.marginBottom: str = get_defined_value(state, def_state, "marginBottom")
		self.marginRight: str = get_defined_value(state, def_state, "marginRight")
		self.marginLeft: str = get_defined_value(state, def_state, "marginLeft")
		self.paddingTop: str = get_defined_value(state, def_state, "paddingTop")
		self.paddingBottom: str = get_defined_value(state, def_state, "paddingBottom")
		self.paddingRight: str = get_defined_value(state, def_state, "paddingRight")
		self.paddingLeft: str = get_defined_value(state, def_state, "paddingLeft")
		self.width: str = get_defined_value(state, def_state, "width")
		self.height: str = get_defined_value(state, def_state, "height")
		self.minWidth: str = get_defined_value(state, def_state, "minWidth")
		self.minHeight: str = get_defined_value(state, def_state, "minHeight")
		self.maxWidth: str = get_defined_value(state, def_state, "maxWidth")
		self.maxHeight: str = get_defined_value(state, def_state, "maxHeight")
		self.overflow: str = get_defined_value(state, def_state, "overflow")
		self.fontFamily: str = get_defined_value(state, def_state, "fontFamily")
		self.fontWeight: int = get_defined_value(state, def_state, "fontWeight")
		self.fontSize: str = get_defined_value(state, def_state, "fontSize")
		self.textAlign: str = get_defined_value(state, def_state, "textAlign")
		self.color: str = get_defined_value(state, def_state, "color")
		self.opacity: str = get_defined_value(state, def_state, "opacity")
		self.fontStyle: str = get_defined_value(state, def_state, "fontStyle")
		self.borderRadius: str = get_defined_value(state, def_state, "borderRadius")
		self.borderWidth: str = get_defined_value(state, def_state, "borderWidth")
		self.borderStyle: str = get_defined_value(state, def_state, "borderStyle")
		self.borderColor: str = get_defined_value(state, def_state, "borderColor")
		self.backgroundImage: str = get_defined_value(state, def_state, "backgroundImage")
		self.backgroundColor: str = get_defined_value(state, def_state, "backgroundColor")
		self.backgroundClip: str = get_defined_value(state, def_state, "backgroundClip")
		self.backgroundOrigin: str = get_defined_value(state, def_state, "backgroundOrigin")
		self.backgroundAttachment: str = get_defined_value(state, def_state, "backgroundAttachment")
		self.backgroundPositionX: str = get_defined_value(state, def_state, "backgroundPositionX")
		self.backgroundPositionY: str = get_defined_value(state, def_state, "backgroundPositionY")
		self.backgroundRepeat: str = get_defined_value(state, def_state, "backgroundRepeat")
		self.position: str = get_defined_value(state, def_state, "position")
		self.float: str = get_defined_value(state, def_state, "float")
		self.clear: str = get_defined_value(state, def_state, "clear")
		self.top: str = get_defined_value(state, def_state, "top")
		self.left: str = get_defined_value(state, def_state, "left")
		self.bottom: str = get_defined_value(state, def_state, "bottom")
		self.right: str = get_defined_value(state, def_state, "right")
		self.zIndex: str = get_defined_value(state, def_state, "zIndex")
		self.outlineStyle: str = get_defined_value(state, def_state, "outlineStyle")
		self.outlineColor: str = get_defined_value(state, def_state, "outlineColor")
		self.outlineOffset: str = get_defined_value(state, def_state, "outlineOffset")
		self.outlineWidth: str = get_defined_value(state, def_state, "outlineWidth")
		self.cursor: str = get_defined_value(state, def_state, "cursor")
		self.boxSizing: str = get_defined_value(state, def_state, "boxSizing")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def alignSelf(self):
		self._getter_access_tracker["alignSelf"] = {}
		return self._alignSelf
	@alignSelf.setter
	def alignSelf(self, state):
		self._setter_access_tracker["alignSelf"] = {}
		self._alignSelf = state
	@property
	def flexGrow(self):
		self._getter_access_tracker["flexGrow"] = {}
		return self._flexGrow
	@flexGrow.setter
	def flexGrow(self, state):
		self._setter_access_tracker["flexGrow"] = {}
		self._flexGrow = state
	@property
	def flexShrink(self):
		self._getter_access_tracker["flexShrink"] = {}
		return self._flexShrink
	@flexShrink.setter
	def flexShrink(self, state):
		self._setter_access_tracker["flexShrink"] = {}
		self._flexShrink = state
	@property
	def order(self):
		self._getter_access_tracker["order"] = {}
		return self._order
	@order.setter
	def order(self, state):
		self._setter_access_tracker["order"] = {}
		self._order = state
	@property
	def marginTop(self):
		self._getter_access_tracker["marginTop"] = {}
		return self._marginTop
	@marginTop.setter
	def marginTop(self, state):
		self._setter_access_tracker["marginTop"] = {}
		self._marginTop = state
	@property
	def marginBottom(self):
		self._getter_access_tracker["marginBottom"] = {}
		return self._marginBottom
	@marginBottom.setter
	def marginBottom(self, state):
		self._setter_access_tracker["marginBottom"] = {}
		self._marginBottom = state
	@property
	def marginRight(self):
		self._getter_access_tracker["marginRight"] = {}
		return self._marginRight
	@marginRight.setter
	def marginRight(self, state):
		self._setter_access_tracker["marginRight"] = {}
		self._marginRight = state
	@property
	def marginLeft(self):
		self._getter_access_tracker["marginLeft"] = {}
		return self._marginLeft
	@marginLeft.setter
	def marginLeft(self, state):
		self._setter_access_tracker["marginLeft"] = {}
		self._marginLeft = state
	@property
	def paddingTop(self):
		self._getter_access_tracker["paddingTop"] = {}
		return self._paddingTop
	@paddingTop.setter
	def paddingTop(self, state):
		self._setter_access_tracker["paddingTop"] = {}
		self._paddingTop = state
	@property
	def paddingBottom(self):
		self._getter_access_tracker["paddingBottom"] = {}
		return self._paddingBottom
	@paddingBottom.setter
	def paddingBottom(self, state):
		self._setter_access_tracker["paddingBottom"] = {}
		self._paddingBottom = state
	@property
	def paddingRight(self):
		self._getter_access_tracker["paddingRight"] = {}
		return self._paddingRight
	@paddingRight.setter
	def paddingRight(self, state):
		self._setter_access_tracker["paddingRight"] = {}
		self._paddingRight = state
	@property
	def paddingLeft(self):
		self._getter_access_tracker["paddingLeft"] = {}
		return self._paddingLeft
	@paddingLeft.setter
	def paddingLeft(self, state):
		self._setter_access_tracker["paddingLeft"] = {}
		self._paddingLeft = state
	@property
	def width(self):
		self._getter_access_tracker["width"] = {}
		return self._width
	@width.setter
	def width(self, state):
		self._setter_access_tracker["width"] = {}
		self._width = state
	@property
	def height(self):
		self._getter_access_tracker["height"] = {}
		return self._height
	@height.setter
	def height(self, state):
		self._setter_access_tracker["height"] = {}
		self._height = state
	@property
	def minWidth(self):
		self._getter_access_tracker["minWidth"] = {}
		return self._minWidth
	@minWidth.setter
	def minWidth(self, state):
		self._setter_access_tracker["minWidth"] = {}
		self._minWidth = state
	@property
	def minHeight(self):
		self._getter_access_tracker["minHeight"] = {}
		return self._minHeight
	@minHeight.setter
	def minHeight(self, state):
		self._setter_access_tracker["minHeight"] = {}
		self._minHeight = state
	@property
	def maxWidth(self):
		self._getter_access_tracker["maxWidth"] = {}
		return self._maxWidth
	@maxWidth.setter
	def maxWidth(self, state):
		self._setter_access_tracker["maxWidth"] = {}
		self._maxWidth = state
	@property
	def maxHeight(self):
		self._getter_access_tracker["maxHeight"] = {}
		return self._maxHeight
	@maxHeight.setter
	def maxHeight(self, state):
		self._setter_access_tracker["maxHeight"] = {}
		self._maxHeight = state
	@property
	def overflow(self):
		self._getter_access_tracker["overflow"] = {}
		return self._overflow
	@overflow.setter
	def overflow(self, state):
		self._setter_access_tracker["overflow"] = {}
		self._overflow = state
	@property
	def fontFamily(self):
		self._getter_access_tracker["fontFamily"] = {}
		return self._fontFamily
	@fontFamily.setter
	def fontFamily(self, state):
		self._setter_access_tracker["fontFamily"] = {}
		self._fontFamily = state
	@property
	def fontWeight(self):
		self._getter_access_tracker["fontWeight"] = {}
		return self._fontWeight
	@fontWeight.setter
	def fontWeight(self, state):
		self._setter_access_tracker["fontWeight"] = {}
		self._fontWeight = state
	@property
	def fontSize(self):
		self._getter_access_tracker["fontSize"] = {}
		return self._fontSize
	@fontSize.setter
	def fontSize(self, state):
		self._setter_access_tracker["fontSize"] = {}
		self._fontSize = state
	@property
	def textAlign(self):
		self._getter_access_tracker["textAlign"] = {}
		return self._textAlign
	@textAlign.setter
	def textAlign(self, state):
		self._setter_access_tracker["textAlign"] = {}
		self._textAlign = state
	@property
	def color(self):
		self._getter_access_tracker["color"] = {}
		return self._color
	@color.setter
	def color(self, state):
		self._setter_access_tracker["color"] = {}
		self._color = state
	@property
	def opacity(self):
		self._getter_access_tracker["opacity"] = {}
		return self._opacity
	@opacity.setter
	def opacity(self, state):
		self._setter_access_tracker["opacity"] = {}
		self._opacity = state
	@property
	def fontStyle(self):
		self._getter_access_tracker["fontStyle"] = {}
		return self._fontStyle
	@fontStyle.setter
	def fontStyle(self, state):
		self._setter_access_tracker["fontStyle"] = {}
		self._fontStyle = state
	@property
	def borderRadius(self):
		self._getter_access_tracker["borderRadius"] = {}
		return self._borderRadius
	@borderRadius.setter
	def borderRadius(self, state):
		self._setter_access_tracker["borderRadius"] = {}
		self._borderRadius = state
	@property
	def borderWidth(self):
		self._getter_access_tracker["borderWidth"] = {}
		return self._borderWidth
	@borderWidth.setter
	def borderWidth(self, state):
		self._setter_access_tracker["borderWidth"] = {}
		self._borderWidth = state
	@property
	def borderStyle(self):
		self._getter_access_tracker["borderStyle"] = {}
		return self._borderStyle
	@borderStyle.setter
	def borderStyle(self, state):
		self._setter_access_tracker["borderStyle"] = {}
		self._borderStyle = state
	@property
	def borderColor(self):
		self._getter_access_tracker["borderColor"] = {}
		return self._borderColor
	@borderColor.setter
	def borderColor(self, state):
		self._setter_access_tracker["borderColor"] = {}
		self._borderColor = state
	@property
	def backgroundImage(self):
		self._getter_access_tracker["backgroundImage"] = {}
		return self._backgroundImage
	@backgroundImage.setter
	def backgroundImage(self, state):
		self._setter_access_tracker["backgroundImage"] = {}
		self._backgroundImage = state
	@property
	def backgroundColor(self):
		self._getter_access_tracker["backgroundColor"] = {}
		return self._backgroundColor
	@backgroundColor.setter
	def backgroundColor(self, state):
		self._setter_access_tracker["backgroundColor"] = {}
		self._backgroundColor = state
	@property
	def backgroundClip(self):
		self._getter_access_tracker["backgroundClip"] = {}
		return self._backgroundClip
	@backgroundClip.setter
	def backgroundClip(self, state):
		self._setter_access_tracker["backgroundClip"] = {}
		self._backgroundClip = state
	@property
	def backgroundOrigin(self):
		self._getter_access_tracker["backgroundOrigin"] = {}
		return self._backgroundOrigin
	@backgroundOrigin.setter
	def backgroundOrigin(self, state):
		self._setter_access_tracker["backgroundOrigin"] = {}
		self._backgroundOrigin = state
	@property
	def backgroundAttachment(self):
		self._getter_access_tracker["backgroundAttachment"] = {}
		return self._backgroundAttachment
	@backgroundAttachment.setter
	def backgroundAttachment(self, state):
		self._setter_access_tracker["backgroundAttachment"] = {}
		self._backgroundAttachment = state
	@property
	def backgroundPositionX(self):
		self._getter_access_tracker["backgroundPositionX"] = {}
		return self._backgroundPositionX
	@backgroundPositionX.setter
	def backgroundPositionX(self, state):
		self._setter_access_tracker["backgroundPositionX"] = {}
		self._backgroundPositionX = state
	@property
	def backgroundPositionY(self):
		self._getter_access_tracker["backgroundPositionY"] = {}
		return self._backgroundPositionY
	@backgroundPositionY.setter
	def backgroundPositionY(self, state):
		self._setter_access_tracker["backgroundPositionY"] = {}
		self._backgroundPositionY = state
	@property
	def backgroundRepeat(self):
		self._getter_access_tracker["backgroundRepeat"] = {}
		return self._backgroundRepeat
	@backgroundRepeat.setter
	def backgroundRepeat(self, state):
		self._setter_access_tracker["backgroundRepeat"] = {}
		self._backgroundRepeat = state
	@property
	def position(self):
		self._getter_access_tracker["position"] = {}
		return self._position
	@position.setter
	def position(self, state):
		self._setter_access_tracker["position"] = {}
		self._position = state
	@property
	def float(self):
		self._getter_access_tracker["float"] = {}
		return self._float
	@float.setter
	def float(self, state):
		self._setter_access_tracker["float"] = {}
		self._float = state
	@property
	def clear(self):
		self._getter_access_tracker["clear"] = {}
		return self._clear
	@clear.setter
	def clear(self, state):
		self._setter_access_tracker["clear"] = {}
		self._clear = state
	@property
	def top(self):
		self._getter_access_tracker["top"] = {}
		return self._top
	@top.setter
	def top(self, state):
		self._setter_access_tracker["top"] = {}
		self._top = state
	@property
	def left(self):
		self._getter_access_tracker["left"] = {}
		return self._left
	@left.setter
	def left(self, state):
		self._setter_access_tracker["left"] = {}
		self._left = state
	@property
	def bottom(self):
		self._getter_access_tracker["bottom"] = {}
		return self._bottom
	@bottom.setter
	def bottom(self, state):
		self._setter_access_tracker["bottom"] = {}
		self._bottom = state
	@property
	def right(self):
		self._getter_access_tracker["right"] = {}
		return self._right
	@right.setter
	def right(self, state):
		self._setter_access_tracker["right"] = {}
		self._right = state
	@property
	def zIndex(self):
		self._getter_access_tracker["zIndex"] = {}
		return self._zIndex
	@zIndex.setter
	def zIndex(self, state):
		self._setter_access_tracker["zIndex"] = {}
		self._zIndex = state
	@property
	def outlineStyle(self):
		self._getter_access_tracker["outlineStyle"] = {}
		return self._outlineStyle
	@outlineStyle.setter
	def outlineStyle(self, state):
		self._setter_access_tracker["outlineStyle"] = {}
		self._outlineStyle = state
	@property
	def outlineColor(self):
		self._getter_access_tracker["outlineColor"] = {}
		return self._outlineColor
	@outlineColor.setter
	def outlineColor(self, state):
		self._setter_access_tracker["outlineColor"] = {}
		self._outlineColor = state
	@property
	def outlineOffset(self):
		self._getter_access_tracker["outlineOffset"] = {}
		return self._outlineOffset
	@outlineOffset.setter
	def outlineOffset(self, state):
		self._setter_access_tracker["outlineOffset"] = {}
		self._outlineOffset = state
	@property
	def outlineWidth(self):
		self._getter_access_tracker["outlineWidth"] = {}
		return self._outlineWidth
	@outlineWidth.setter
	def outlineWidth(self, state):
		self._setter_access_tracker["outlineWidth"] = {}
		self._outlineWidth = state
	@property
	def cursor(self):
		self._getter_access_tracker["cursor"] = {}
		return self._cursor
	@cursor.setter
	def cursor(self, state):
		self._setter_access_tracker["cursor"] = {}
		self._cursor = state
	@property
	def boxSizing(self):
		self._getter_access_tracker["boxSizing"] = {}
		return self._boxSizing
	@boxSizing.setter
	def boxSizing(self, state):
		self._setter_access_tracker["boxSizing"] = {}
		self._boxSizing = state
	def _to_json_fields(self):
		return {
			"alignSelf": self._alignSelf,
			"flexGrow": self._flexGrow,
			"flexShrink": self._flexShrink,
			"order": self._order,
			"marginTop": self._marginTop,
			"marginBottom": self._marginBottom,
			"marginRight": self._marginRight,
			"marginLeft": self._marginLeft,
			"paddingTop": self._paddingTop,
			"paddingBottom": self._paddingBottom,
			"paddingRight": self._paddingRight,
			"paddingLeft": self._paddingLeft,
			"width": self._width,
			"height": self._height,
			"minWidth": self._minWidth,
			"minHeight": self._minHeight,
			"maxWidth": self._maxWidth,
			"maxHeight": self._maxHeight,
			"overflow": self._overflow,
			"fontFamily": self._fontFamily,
			"fontWeight": self._fontWeight,
			"fontSize": self._fontSize,
			"textAlign": self._textAlign,
			"color": self._color,
			"opacity": self._opacity,
			"fontStyle": self._fontStyle,
			"borderRadius": self._borderRadius,
			"borderWidth": self._borderWidth,
			"borderStyle": self._borderStyle,
			"borderColor": self._borderColor,
			"backgroundImage": self._backgroundImage,
			"backgroundColor": self._backgroundColor,
			"backgroundClip": self._backgroundClip,
			"backgroundOrigin": self._backgroundOrigin,
			"backgroundAttachment": self._backgroundAttachment,
			"backgroundPositionX": self._backgroundPositionX,
			"backgroundPositionY": self._backgroundPositionY,
			"backgroundRepeat": self._backgroundRepeat,
			"position": self._position,
			"float": self._float,
			"clear": self._clear,
			"top": self._top,
			"left": self._left,
			"bottom": self._bottom,
			"right": self._right,
			"zIndex": self._zIndex,
			"outlineStyle": self._outlineStyle,
			"outlineColor": self._outlineColor,
			"outlineOffset": self._outlineOffset,
			"outlineWidth": self._outlineWidth,
			"cursor": self._cursor,
			"boxSizing": self._boxSizing,
			}


class TextBoxcustomClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.text: str = get_defined_value(state, def_state, "text")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def text(self):
		self._getter_access_tracker["text"] = {}
		return self._text
	@text.setter
	def text(self, state):
		self._setter_access_tracker["text"] = {}
		self._text = state
	def _to_json_fields(self):
		return {
			"text": self._text,
			}


class TextBox:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state
		self.onClick = False
		self.styles: TextBoxstylesClass = get_defined_value(state, def_state, "styles")
		self.custom: TextBoxcustomClass = get_defined_value(state, def_state, "custom")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def styles(self):
		self._getter_access_tracker["styles"] = {}
		return self._styles
	@styles.setter
	def styles(self, state):
		self._setter_access_tracker["styles"] = {}
		self._styles = TextBoxstylesClass(state, self._def_state["styles"])
	@property
	def custom(self):
		self._getter_access_tracker["custom"] = {}
		return self._custom
	@custom.setter
	def custom(self, state):
		self._setter_access_tracker["custom"] = {}
		self._custom = TextBoxcustomClass(state, self._def_state["custom"])
	def _to_json_fields(self):
		return {
			"styles": self._styles,
			"custom": self._custom,
			}


class LinkstylesClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.alignSelf: str = get_defined_value(state, def_state, "alignSelf")
		self.flexGrow: str = get_defined_value(state, def_state, "flexGrow")
		self.flexShrink: str = get_defined_value(state, def_state, "flexShrink")
		self.order: str = get_defined_value(state, def_state, "order")
		self.marginTop: str = get_defined_value(state, def_state, "marginTop")
		self.marginBottom: str = get_defined_value(state, def_state, "marginBottom")
		self.marginRight: str = get_defined_value(state, def_state, "marginRight")
		self.marginLeft: str = get_defined_value(state, def_state, "marginLeft")
		self.paddingTop: str = get_defined_value(state, def_state, "paddingTop")
		self.paddingBottom: str = get_defined_value(state, def_state, "paddingBottom")
		self.paddingRight: str = get_defined_value(state, def_state, "paddingRight")
		self.paddingLeft: str = get_defined_value(state, def_state, "paddingLeft")
		self.width: str = get_defined_value(state, def_state, "width")
		self.height: str = get_defined_value(state, def_state, "height")
		self.minWidth: str = get_defined_value(state, def_state, "minWidth")
		self.minHeight: str = get_defined_value(state, def_state, "minHeight")
		self.maxWidth: str = get_defined_value(state, def_state, "maxWidth")
		self.maxHeight: str = get_defined_value(state, def_state, "maxHeight")
		self.overflow: str = get_defined_value(state, def_state, "overflow")
		self.fontFamily: str = get_defined_value(state, def_state, "fontFamily")
		self.fontWeight: int = get_defined_value(state, def_state, "fontWeight")
		self.fontSize: str = get_defined_value(state, def_state, "fontSize")
		self.textAlign: str = get_defined_value(state, def_state, "textAlign")
		self.color: str = get_defined_value(state, def_state, "color")
		self.opacity: str = get_defined_value(state, def_state, "opacity")
		self.fontStyle: str = get_defined_value(state, def_state, "fontStyle")
		self.borderRadius: str = get_defined_value(state, def_state, "borderRadius")
		self.borderWidth: str = get_defined_value(state, def_state, "borderWidth")
		self.borderStyle: str = get_defined_value(state, def_state, "borderStyle")
		self.borderColor: str = get_defined_value(state, def_state, "borderColor")
		self.backgroundImage: str = get_defined_value(state, def_state, "backgroundImage")
		self.backgroundColor: str = get_defined_value(state, def_state, "backgroundColor")
		self.backgroundClip: str = get_defined_value(state, def_state, "backgroundClip")
		self.backgroundOrigin: str = get_defined_value(state, def_state, "backgroundOrigin")
		self.backgroundAttachment: str = get_defined_value(state, def_state, "backgroundAttachment")
		self.backgroundPositionX: str = get_defined_value(state, def_state, "backgroundPositionX")
		self.backgroundPositionY: str = get_defined_value(state, def_state, "backgroundPositionY")
		self.backgroundRepeat: str = get_defined_value(state, def_state, "backgroundRepeat")
		self.position: str = get_defined_value(state, def_state, "position")
		self.float: str = get_defined_value(state, def_state, "float")
		self.clear: str = get_defined_value(state, def_state, "clear")
		self.top: str = get_defined_value(state, def_state, "top")
		self.left: str = get_defined_value(state, def_state, "left")
		self.bottom: str = get_defined_value(state, def_state, "bottom")
		self.right: str = get_defined_value(state, def_state, "right")
		self.zIndex: str = get_defined_value(state, def_state, "zIndex")
		self.outlineStyle: str = get_defined_value(state, def_state, "outlineStyle")
		self.outlineColor: str = get_defined_value(state, def_state, "outlineColor")
		self.outlineOffset: str = get_defined_value(state, def_state, "outlineOffset")
		self.outlineWidth: str = get_defined_value(state, def_state, "outlineWidth")
		self.cursor: str = get_defined_value(state, def_state, "cursor")
		self.boxSizing: str = get_defined_value(state, def_state, "boxSizing")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def alignSelf(self):
		self._getter_access_tracker["alignSelf"] = {}
		return self._alignSelf
	@alignSelf.setter
	def alignSelf(self, state):
		self._setter_access_tracker["alignSelf"] = {}
		self._alignSelf = state
	@property
	def flexGrow(self):
		self._getter_access_tracker["flexGrow"] = {}
		return self._flexGrow
	@flexGrow.setter
	def flexGrow(self, state):
		self._setter_access_tracker["flexGrow"] = {}
		self._flexGrow = state
	@property
	def flexShrink(self):
		self._getter_access_tracker["flexShrink"] = {}
		return self._flexShrink
	@flexShrink.setter
	def flexShrink(self, state):
		self._setter_access_tracker["flexShrink"] = {}
		self._flexShrink = state
	@property
	def order(self):
		self._getter_access_tracker["order"] = {}
		return self._order
	@order.setter
	def order(self, state):
		self._setter_access_tracker["order"] = {}
		self._order = state
	@property
	def marginTop(self):
		self._getter_access_tracker["marginTop"] = {}
		return self._marginTop
	@marginTop.setter
	def marginTop(self, state):
		self._setter_access_tracker["marginTop"] = {}
		self._marginTop = state
	@property
	def marginBottom(self):
		self._getter_access_tracker["marginBottom"] = {}
		return self._marginBottom
	@marginBottom.setter
	def marginBottom(self, state):
		self._setter_access_tracker["marginBottom"] = {}
		self._marginBottom = state
	@property
	def marginRight(self):
		self._getter_access_tracker["marginRight"] = {}
		return self._marginRight
	@marginRight.setter
	def marginRight(self, state):
		self._setter_access_tracker["marginRight"] = {}
		self._marginRight = state
	@property
	def marginLeft(self):
		self._getter_access_tracker["marginLeft"] = {}
		return self._marginLeft
	@marginLeft.setter
	def marginLeft(self, state):
		self._setter_access_tracker["marginLeft"] = {}
		self._marginLeft = state
	@property
	def paddingTop(self):
		self._getter_access_tracker["paddingTop"] = {}
		return self._paddingTop
	@paddingTop.setter
	def paddingTop(self, state):
		self._setter_access_tracker["paddingTop"] = {}
		self._paddingTop = state
	@property
	def paddingBottom(self):
		self._getter_access_tracker["paddingBottom"] = {}
		return self._paddingBottom
	@paddingBottom.setter
	def paddingBottom(self, state):
		self._setter_access_tracker["paddingBottom"] = {}
		self._paddingBottom = state
	@property
	def paddingRight(self):
		self._getter_access_tracker["paddingRight"] = {}
		return self._paddingRight
	@paddingRight.setter
	def paddingRight(self, state):
		self._setter_access_tracker["paddingRight"] = {}
		self._paddingRight = state
	@property
	def paddingLeft(self):
		self._getter_access_tracker["paddingLeft"] = {}
		return self._paddingLeft
	@paddingLeft.setter
	def paddingLeft(self, state):
		self._setter_access_tracker["paddingLeft"] = {}
		self._paddingLeft = state
	@property
	def width(self):
		self._getter_access_tracker["width"] = {}
		return self._width
	@width.setter
	def width(self, state):
		self._setter_access_tracker["width"] = {}
		self._width = state
	@property
	def height(self):
		self._getter_access_tracker["height"] = {}
		return self._height
	@height.setter
	def height(self, state):
		self._setter_access_tracker["height"] = {}
		self._height = state
	@property
	def minWidth(self):
		self._getter_access_tracker["minWidth"] = {}
		return self._minWidth
	@minWidth.setter
	def minWidth(self, state):
		self._setter_access_tracker["minWidth"] = {}
		self._minWidth = state
	@property
	def minHeight(self):
		self._getter_access_tracker["minHeight"] = {}
		return self._minHeight
	@minHeight.setter
	def minHeight(self, state):
		self._setter_access_tracker["minHeight"] = {}
		self._minHeight = state
	@property
	def maxWidth(self):
		self._getter_access_tracker["maxWidth"] = {}
		return self._maxWidth
	@maxWidth.setter
	def maxWidth(self, state):
		self._setter_access_tracker["maxWidth"] = {}
		self._maxWidth = state
	@property
	def maxHeight(self):
		self._getter_access_tracker["maxHeight"] = {}
		return self._maxHeight
	@maxHeight.setter
	def maxHeight(self, state):
		self._setter_access_tracker["maxHeight"] = {}
		self._maxHeight = state
	@property
	def overflow(self):
		self._getter_access_tracker["overflow"] = {}
		return self._overflow
	@overflow.setter
	def overflow(self, state):
		self._setter_access_tracker["overflow"] = {}
		self._overflow = state
	@property
	def fontFamily(self):
		self._getter_access_tracker["fontFamily"] = {}
		return self._fontFamily
	@fontFamily.setter
	def fontFamily(self, state):
		self._setter_access_tracker["fontFamily"] = {}
		self._fontFamily = state
	@property
	def fontWeight(self):
		self._getter_access_tracker["fontWeight"] = {}
		return self._fontWeight
	@fontWeight.setter
	def fontWeight(self, state):
		self._setter_access_tracker["fontWeight"] = {}
		self._fontWeight = state
	@property
	def fontSize(self):
		self._getter_access_tracker["fontSize"] = {}
		return self._fontSize
	@fontSize.setter
	def fontSize(self, state):
		self._setter_access_tracker["fontSize"] = {}
		self._fontSize = state
	@property
	def textAlign(self):
		self._getter_access_tracker["textAlign"] = {}
		return self._textAlign
	@textAlign.setter
	def textAlign(self, state):
		self._setter_access_tracker["textAlign"] = {}
		self._textAlign = state
	@property
	def color(self):
		self._getter_access_tracker["color"] = {}
		return self._color
	@color.setter
	def color(self, state):
		self._setter_access_tracker["color"] = {}
		self._color = state
	@property
	def opacity(self):
		self._getter_access_tracker["opacity"] = {}
		return self._opacity
	@opacity.setter
	def opacity(self, state):
		self._setter_access_tracker["opacity"] = {}
		self._opacity = state
	@property
	def fontStyle(self):
		self._getter_access_tracker["fontStyle"] = {}
		return self._fontStyle
	@fontStyle.setter
	def fontStyle(self, state):
		self._setter_access_tracker["fontStyle"] = {}
		self._fontStyle = state
	@property
	def borderRadius(self):
		self._getter_access_tracker["borderRadius"] = {}
		return self._borderRadius
	@borderRadius.setter
	def borderRadius(self, state):
		self._setter_access_tracker["borderRadius"] = {}
		self._borderRadius = state
	@property
	def borderWidth(self):
		self._getter_access_tracker["borderWidth"] = {}
		return self._borderWidth
	@borderWidth.setter
	def borderWidth(self, state):
		self._setter_access_tracker["borderWidth"] = {}
		self._borderWidth = state
	@property
	def borderStyle(self):
		self._getter_access_tracker["borderStyle"] = {}
		return self._borderStyle
	@borderStyle.setter
	def borderStyle(self, state):
		self._setter_access_tracker["borderStyle"] = {}
		self._borderStyle = state
	@property
	def borderColor(self):
		self._getter_access_tracker["borderColor"] = {}
		return self._borderColor
	@borderColor.setter
	def borderColor(self, state):
		self._setter_access_tracker["borderColor"] = {}
		self._borderColor = state
	@property
	def backgroundImage(self):
		self._getter_access_tracker["backgroundImage"] = {}
		return self._backgroundImage
	@backgroundImage.setter
	def backgroundImage(self, state):
		self._setter_access_tracker["backgroundImage"] = {}
		self._backgroundImage = state
	@property
	def backgroundColor(self):
		self._getter_access_tracker["backgroundColor"] = {}
		return self._backgroundColor
	@backgroundColor.setter
	def backgroundColor(self, state):
		self._setter_access_tracker["backgroundColor"] = {}
		self._backgroundColor = state
	@property
	def backgroundClip(self):
		self._getter_access_tracker["backgroundClip"] = {}
		return self._backgroundClip
	@backgroundClip.setter
	def backgroundClip(self, state):
		self._setter_access_tracker["backgroundClip"] = {}
		self._backgroundClip = state
	@property
	def backgroundOrigin(self):
		self._getter_access_tracker["backgroundOrigin"] = {}
		return self._backgroundOrigin
	@backgroundOrigin.setter
	def backgroundOrigin(self, state):
		self._setter_access_tracker["backgroundOrigin"] = {}
		self._backgroundOrigin = state
	@property
	def backgroundAttachment(self):
		self._getter_access_tracker["backgroundAttachment"] = {}
		return self._backgroundAttachment
	@backgroundAttachment.setter
	def backgroundAttachment(self, state):
		self._setter_access_tracker["backgroundAttachment"] = {}
		self._backgroundAttachment = state
	@property
	def backgroundPositionX(self):
		self._getter_access_tracker["backgroundPositionX"] = {}
		return self._backgroundPositionX
	@backgroundPositionX.setter
	def backgroundPositionX(self, state):
		self._setter_access_tracker["backgroundPositionX"] = {}
		self._backgroundPositionX = state
	@property
	def backgroundPositionY(self):
		self._getter_access_tracker["backgroundPositionY"] = {}
		return self._backgroundPositionY
	@backgroundPositionY.setter
	def backgroundPositionY(self, state):
		self._setter_access_tracker["backgroundPositionY"] = {}
		self._backgroundPositionY = state
	@property
	def backgroundRepeat(self):
		self._getter_access_tracker["backgroundRepeat"] = {}
		return self._backgroundRepeat
	@backgroundRepeat.setter
	def backgroundRepeat(self, state):
		self._setter_access_tracker["backgroundRepeat"] = {}
		self._backgroundRepeat = state
	@property
	def position(self):
		self._getter_access_tracker["position"] = {}
		return self._position
	@position.setter
	def position(self, state):
		self._setter_access_tracker["position"] = {}
		self._position = state
	@property
	def float(self):
		self._getter_access_tracker["float"] = {}
		return self._float
	@float.setter
	def float(self, state):
		self._setter_access_tracker["float"] = {}
		self._float = state
	@property
	def clear(self):
		self._getter_access_tracker["clear"] = {}
		return self._clear
	@clear.setter
	def clear(self, state):
		self._setter_access_tracker["clear"] = {}
		self._clear = state
	@property
	def top(self):
		self._getter_access_tracker["top"] = {}
		return self._top
	@top.setter
	def top(self, state):
		self._setter_access_tracker["top"] = {}
		self._top = state
	@property
	def left(self):
		self._getter_access_tracker["left"] = {}
		return self._left
	@left.setter
	def left(self, state):
		self._setter_access_tracker["left"] = {}
		self._left = state
	@property
	def bottom(self):
		self._getter_access_tracker["bottom"] = {}
		return self._bottom
	@bottom.setter
	def bottom(self, state):
		self._setter_access_tracker["bottom"] = {}
		self._bottom = state
	@property
	def right(self):
		self._getter_access_tracker["right"] = {}
		return self._right
	@right.setter
	def right(self, state):
		self._setter_access_tracker["right"] = {}
		self._right = state
	@property
	def zIndex(self):
		self._getter_access_tracker["zIndex"] = {}
		return self._zIndex
	@zIndex.setter
	def zIndex(self, state):
		self._setter_access_tracker["zIndex"] = {}
		self._zIndex = state
	@property
	def outlineStyle(self):
		self._getter_access_tracker["outlineStyle"] = {}
		return self._outlineStyle
	@outlineStyle.setter
	def outlineStyle(self, state):
		self._setter_access_tracker["outlineStyle"] = {}
		self._outlineStyle = state
	@property
	def outlineColor(self):
		self._getter_access_tracker["outlineColor"] = {}
		return self._outlineColor
	@outlineColor.setter
	def outlineColor(self, state):
		self._setter_access_tracker["outlineColor"] = {}
		self._outlineColor = state
	@property
	def outlineOffset(self):
		self._getter_access_tracker["outlineOffset"] = {}
		return self._outlineOffset
	@outlineOffset.setter
	def outlineOffset(self, state):
		self._setter_access_tracker["outlineOffset"] = {}
		self._outlineOffset = state
	@property
	def outlineWidth(self):
		self._getter_access_tracker["outlineWidth"] = {}
		return self._outlineWidth
	@outlineWidth.setter
	def outlineWidth(self, state):
		self._setter_access_tracker["outlineWidth"] = {}
		self._outlineWidth = state
	@property
	def cursor(self):
		self._getter_access_tracker["cursor"] = {}
		return self._cursor
	@cursor.setter
	def cursor(self, state):
		self._setter_access_tracker["cursor"] = {}
		self._cursor = state
	@property
	def boxSizing(self):
		self._getter_access_tracker["boxSizing"] = {}
		return self._boxSizing
	@boxSizing.setter
	def boxSizing(self, state):
		self._setter_access_tracker["boxSizing"] = {}
		self._boxSizing = state
	def _to_json_fields(self):
		return {
			"alignSelf": self._alignSelf,
			"flexGrow": self._flexGrow,
			"flexShrink": self._flexShrink,
			"order": self._order,
			"marginTop": self._marginTop,
			"marginBottom": self._marginBottom,
			"marginRight": self._marginRight,
			"marginLeft": self._marginLeft,
			"paddingTop": self._paddingTop,
			"paddingBottom": self._paddingBottom,
			"paddingRight": self._paddingRight,
			"paddingLeft": self._paddingLeft,
			"width": self._width,
			"height": self._height,
			"minWidth": self._minWidth,
			"minHeight": self._minHeight,
			"maxWidth": self._maxWidth,
			"maxHeight": self._maxHeight,
			"overflow": self._overflow,
			"fontFamily": self._fontFamily,
			"fontWeight": self._fontWeight,
			"fontSize": self._fontSize,
			"textAlign": self._textAlign,
			"color": self._color,
			"opacity": self._opacity,
			"fontStyle": self._fontStyle,
			"borderRadius": self._borderRadius,
			"borderWidth": self._borderWidth,
			"borderStyle": self._borderStyle,
			"borderColor": self._borderColor,
			"backgroundImage": self._backgroundImage,
			"backgroundColor": self._backgroundColor,
			"backgroundClip": self._backgroundClip,
			"backgroundOrigin": self._backgroundOrigin,
			"backgroundAttachment": self._backgroundAttachment,
			"backgroundPositionX": self._backgroundPositionX,
			"backgroundPositionY": self._backgroundPositionY,
			"backgroundRepeat": self._backgroundRepeat,
			"position": self._position,
			"float": self._float,
			"clear": self._clear,
			"top": self._top,
			"left": self._left,
			"bottom": self._bottom,
			"right": self._right,
			"zIndex": self._zIndex,
			"outlineStyle": self._outlineStyle,
			"outlineColor": self._outlineColor,
			"outlineOffset": self._outlineOffset,
			"outlineWidth": self._outlineWidth,
			"cursor": self._cursor,
			"boxSizing": self._boxSizing,
			}


class LinkcustomClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.text: str = get_defined_value(state, def_state, "text")
		self.url: str = get_defined_value(state, def_state, "url")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def text(self):
		self._getter_access_tracker["text"] = {}
		return self._text
	@text.setter
	def text(self, state):
		self._setter_access_tracker["text"] = {}
		self._text = state
	@property
	def url(self):
		self._getter_access_tracker["url"] = {}
		return self._url
	@url.setter
	def url(self, state):
		self._setter_access_tracker["url"] = {}
		self._url = state
	def _to_json_fields(self):
		return {
			"text": self._text,
			"url": self._url,
			}


class Link:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.styles: LinkstylesClass = get_defined_value(state, def_state, "styles")
		self.custom: LinkcustomClass = get_defined_value(state, def_state, "custom")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def styles(self):
		self._getter_access_tracker["styles"] = {}
		return self._styles
	@styles.setter
	def styles(self, state):
		self._setter_access_tracker["styles"] = {}
		self._styles = LinkstylesClass(state, self._def_state["styles"])
	@property
	def custom(self):
		self._getter_access_tracker["custom"] = {}
		return self._custom
	@custom.setter
	def custom(self, state):
		self._setter_access_tracker["custom"] = {}
		self._custom = LinkcustomClass(state, self._def_state["custom"])
	def _to_json_fields(self):
		return {
			"styles": self._styles,
			"custom": self._custom,
			}


class ImagestylesClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.alignSelf: str = get_defined_value(state, def_state, "alignSelf")
		self.flexGrow: str = get_defined_value(state, def_state, "flexGrow")
		self.flexShrink: str = get_defined_value(state, def_state, "flexShrink")
		self.order: str = get_defined_value(state, def_state, "order")
		self.marginTop: str = get_defined_value(state, def_state, "marginTop")
		self.marginBottom: str = get_defined_value(state, def_state, "marginBottom")
		self.marginRight: str = get_defined_value(state, def_state, "marginRight")
		self.marginLeft: str = get_defined_value(state, def_state, "marginLeft")
		self.paddingTop: str = get_defined_value(state, def_state, "paddingTop")
		self.paddingBottom: str = get_defined_value(state, def_state, "paddingBottom")
		self.paddingRight: str = get_defined_value(state, def_state, "paddingRight")
		self.paddingLeft: str = get_defined_value(state, def_state, "paddingLeft")
		self.width: str = get_defined_value(state, def_state, "width")
		self.height: str = get_defined_value(state, def_state, "height")
		self.minWidth: str = get_defined_value(state, def_state, "minWidth")
		self.minHeight: str = get_defined_value(state, def_state, "minHeight")
		self.maxWidth: str = get_defined_value(state, def_state, "maxWidth")
		self.maxHeight: str = get_defined_value(state, def_state, "maxHeight")
		self.overflow: str = get_defined_value(state, def_state, "overflow")
		self.fontFamily: str = get_defined_value(state, def_state, "fontFamily")
		self.fontWeight: int = get_defined_value(state, def_state, "fontWeight")
		self.fontSize: str = get_defined_value(state, def_state, "fontSize")
		self.textAlign: str = get_defined_value(state, def_state, "textAlign")
		self.color: str = get_defined_value(state, def_state, "color")
		self.opacity: str = get_defined_value(state, def_state, "opacity")
		self.fontStyle: str = get_defined_value(state, def_state, "fontStyle")
		self.borderRadius: str = get_defined_value(state, def_state, "borderRadius")
		self.borderWidth: str = get_defined_value(state, def_state, "borderWidth")
		self.borderStyle: str = get_defined_value(state, def_state, "borderStyle")
		self.borderColor: str = get_defined_value(state, def_state, "borderColor")
		self.backgroundImage: str = get_defined_value(state, def_state, "backgroundImage")
		self.backgroundColor: str = get_defined_value(state, def_state, "backgroundColor")
		self.backgroundClip: str = get_defined_value(state, def_state, "backgroundClip")
		self.backgroundOrigin: str = get_defined_value(state, def_state, "backgroundOrigin")
		self.backgroundAttachment: str = get_defined_value(state, def_state, "backgroundAttachment")
		self.backgroundPositionX: str = get_defined_value(state, def_state, "backgroundPositionX")
		self.backgroundPositionY: str = get_defined_value(state, def_state, "backgroundPositionY")
		self.backgroundRepeat: str = get_defined_value(state, def_state, "backgroundRepeat")
		self.position: str = get_defined_value(state, def_state, "position")
		self.float: str = get_defined_value(state, def_state, "float")
		self.clear: str = get_defined_value(state, def_state, "clear")
		self.top: str = get_defined_value(state, def_state, "top")
		self.left: str = get_defined_value(state, def_state, "left")
		self.bottom: str = get_defined_value(state, def_state, "bottom")
		self.right: str = get_defined_value(state, def_state, "right")
		self.zIndex: str = get_defined_value(state, def_state, "zIndex")
		self.outlineStyle: str = get_defined_value(state, def_state, "outlineStyle")
		self.outlineColor: str = get_defined_value(state, def_state, "outlineColor")
		self.outlineOffset: str = get_defined_value(state, def_state, "outlineOffset")
		self.outlineWidth: str = get_defined_value(state, def_state, "outlineWidth")
		self.cursor: str = get_defined_value(state, def_state, "cursor")
		self.boxSizing: str = get_defined_value(state, def_state, "boxSizing")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def alignSelf(self):
		self._getter_access_tracker["alignSelf"] = {}
		return self._alignSelf
	@alignSelf.setter
	def alignSelf(self, state):
		self._setter_access_tracker["alignSelf"] = {}
		self._alignSelf = state
	@property
	def flexGrow(self):
		self._getter_access_tracker["flexGrow"] = {}
		return self._flexGrow
	@flexGrow.setter
	def flexGrow(self, state):
		self._setter_access_tracker["flexGrow"] = {}
		self._flexGrow = state
	@property
	def flexShrink(self):
		self._getter_access_tracker["flexShrink"] = {}
		return self._flexShrink
	@flexShrink.setter
	def flexShrink(self, state):
		self._setter_access_tracker["flexShrink"] = {}
		self._flexShrink = state
	@property
	def order(self):
		self._getter_access_tracker["order"] = {}
		return self._order
	@order.setter
	def order(self, state):
		self._setter_access_tracker["order"] = {}
		self._order = state
	@property
	def marginTop(self):
		self._getter_access_tracker["marginTop"] = {}
		return self._marginTop
	@marginTop.setter
	def marginTop(self, state):
		self._setter_access_tracker["marginTop"] = {}
		self._marginTop = state
	@property
	def marginBottom(self):
		self._getter_access_tracker["marginBottom"] = {}
		return self._marginBottom
	@marginBottom.setter
	def marginBottom(self, state):
		self._setter_access_tracker["marginBottom"] = {}
		self._marginBottom = state
	@property
	def marginRight(self):
		self._getter_access_tracker["marginRight"] = {}
		return self._marginRight
	@marginRight.setter
	def marginRight(self, state):
		self._setter_access_tracker["marginRight"] = {}
		self._marginRight = state
	@property
	def marginLeft(self):
		self._getter_access_tracker["marginLeft"] = {}
		return self._marginLeft
	@marginLeft.setter
	def marginLeft(self, state):
		self._setter_access_tracker["marginLeft"] = {}
		self._marginLeft = state
	@property
	def paddingTop(self):
		self._getter_access_tracker["paddingTop"] = {}
		return self._paddingTop
	@paddingTop.setter
	def paddingTop(self, state):
		self._setter_access_tracker["paddingTop"] = {}
		self._paddingTop = state
	@property
	def paddingBottom(self):
		self._getter_access_tracker["paddingBottom"] = {}
		return self._paddingBottom
	@paddingBottom.setter
	def paddingBottom(self, state):
		self._setter_access_tracker["paddingBottom"] = {}
		self._paddingBottom = state
	@property
	def paddingRight(self):
		self._getter_access_tracker["paddingRight"] = {}
		return self._paddingRight
	@paddingRight.setter
	def paddingRight(self, state):
		self._setter_access_tracker["paddingRight"] = {}
		self._paddingRight = state
	@property
	def paddingLeft(self):
		self._getter_access_tracker["paddingLeft"] = {}
		return self._paddingLeft
	@paddingLeft.setter
	def paddingLeft(self, state):
		self._setter_access_tracker["paddingLeft"] = {}
		self._paddingLeft = state
	@property
	def width(self):
		self._getter_access_tracker["width"] = {}
		return self._width
	@width.setter
	def width(self, state):
		self._setter_access_tracker["width"] = {}
		self._width = state
	@property
	def height(self):
		self._getter_access_tracker["height"] = {}
		return self._height
	@height.setter
	def height(self, state):
		self._setter_access_tracker["height"] = {}
		self._height = state
	@property
	def minWidth(self):
		self._getter_access_tracker["minWidth"] = {}
		return self._minWidth
	@minWidth.setter
	def minWidth(self, state):
		self._setter_access_tracker["minWidth"] = {}
		self._minWidth = state
	@property
	def minHeight(self):
		self._getter_access_tracker["minHeight"] = {}
		return self._minHeight
	@minHeight.setter
	def minHeight(self, state):
		self._setter_access_tracker["minHeight"] = {}
		self._minHeight = state
	@property
	def maxWidth(self):
		self._getter_access_tracker["maxWidth"] = {}
		return self._maxWidth
	@maxWidth.setter
	def maxWidth(self, state):
		self._setter_access_tracker["maxWidth"] = {}
		self._maxWidth = state
	@property
	def maxHeight(self):
		self._getter_access_tracker["maxHeight"] = {}
		return self._maxHeight
	@maxHeight.setter
	def maxHeight(self, state):
		self._setter_access_tracker["maxHeight"] = {}
		self._maxHeight = state
	@property
	def overflow(self):
		self._getter_access_tracker["overflow"] = {}
		return self._overflow
	@overflow.setter
	def overflow(self, state):
		self._setter_access_tracker["overflow"] = {}
		self._overflow = state
	@property
	def fontFamily(self):
		self._getter_access_tracker["fontFamily"] = {}
		return self._fontFamily
	@fontFamily.setter
	def fontFamily(self, state):
		self._setter_access_tracker["fontFamily"] = {}
		self._fontFamily = state
	@property
	def fontWeight(self):
		self._getter_access_tracker["fontWeight"] = {}
		return self._fontWeight
	@fontWeight.setter
	def fontWeight(self, state):
		self._setter_access_tracker["fontWeight"] = {}
		self._fontWeight = state
	@property
	def fontSize(self):
		self._getter_access_tracker["fontSize"] = {}
		return self._fontSize
	@fontSize.setter
	def fontSize(self, state):
		self._setter_access_tracker["fontSize"] = {}
		self._fontSize = state
	@property
	def textAlign(self):
		self._getter_access_tracker["textAlign"] = {}
		return self._textAlign
	@textAlign.setter
	def textAlign(self, state):
		self._setter_access_tracker["textAlign"] = {}
		self._textAlign = state
	@property
	def color(self):
		self._getter_access_tracker["color"] = {}
		return self._color
	@color.setter
	def color(self, state):
		self._setter_access_tracker["color"] = {}
		self._color = state
	@property
	def opacity(self):
		self._getter_access_tracker["opacity"] = {}
		return self._opacity
	@opacity.setter
	def opacity(self, state):
		self._setter_access_tracker["opacity"] = {}
		self._opacity = state
	@property
	def fontStyle(self):
		self._getter_access_tracker["fontStyle"] = {}
		return self._fontStyle
	@fontStyle.setter
	def fontStyle(self, state):
		self._setter_access_tracker["fontStyle"] = {}
		self._fontStyle = state
	@property
	def borderRadius(self):
		self._getter_access_tracker["borderRadius"] = {}
		return self._borderRadius
	@borderRadius.setter
	def borderRadius(self, state):
		self._setter_access_tracker["borderRadius"] = {}
		self._borderRadius = state
	@property
	def borderWidth(self):
		self._getter_access_tracker["borderWidth"] = {}
		return self._borderWidth
	@borderWidth.setter
	def borderWidth(self, state):
		self._setter_access_tracker["borderWidth"] = {}
		self._borderWidth = state
	@property
	def borderStyle(self):
		self._getter_access_tracker["borderStyle"] = {}
		return self._borderStyle
	@borderStyle.setter
	def borderStyle(self, state):
		self._setter_access_tracker["borderStyle"] = {}
		self._borderStyle = state
	@property
	def borderColor(self):
		self._getter_access_tracker["borderColor"] = {}
		return self._borderColor
	@borderColor.setter
	def borderColor(self, state):
		self._setter_access_tracker["borderColor"] = {}
		self._borderColor = state
	@property
	def backgroundImage(self):
		self._getter_access_tracker["backgroundImage"] = {}
		return self._backgroundImage
	@backgroundImage.setter
	def backgroundImage(self, state):
		self._setter_access_tracker["backgroundImage"] = {}
		self._backgroundImage = state
	@property
	def backgroundColor(self):
		self._getter_access_tracker["backgroundColor"] = {}
		return self._backgroundColor
	@backgroundColor.setter
	def backgroundColor(self, state):
		self._setter_access_tracker["backgroundColor"] = {}
		self._backgroundColor = state
	@property
	def backgroundClip(self):
		self._getter_access_tracker["backgroundClip"] = {}
		return self._backgroundClip
	@backgroundClip.setter
	def backgroundClip(self, state):
		self._setter_access_tracker["backgroundClip"] = {}
		self._backgroundClip = state
	@property
	def backgroundOrigin(self):
		self._getter_access_tracker["backgroundOrigin"] = {}
		return self._backgroundOrigin
	@backgroundOrigin.setter
	def backgroundOrigin(self, state):
		self._setter_access_tracker["backgroundOrigin"] = {}
		self._backgroundOrigin = state
	@property
	def backgroundAttachment(self):
		self._getter_access_tracker["backgroundAttachment"] = {}
		return self._backgroundAttachment
	@backgroundAttachment.setter
	def backgroundAttachment(self, state):
		self._setter_access_tracker["backgroundAttachment"] = {}
		self._backgroundAttachment = state
	@property
	def backgroundPositionX(self):
		self._getter_access_tracker["backgroundPositionX"] = {}
		return self._backgroundPositionX
	@backgroundPositionX.setter
	def backgroundPositionX(self, state):
		self._setter_access_tracker["backgroundPositionX"] = {}
		self._backgroundPositionX = state
	@property
	def backgroundPositionY(self):
		self._getter_access_tracker["backgroundPositionY"] = {}
		return self._backgroundPositionY
	@backgroundPositionY.setter
	def backgroundPositionY(self, state):
		self._setter_access_tracker["backgroundPositionY"] = {}
		self._backgroundPositionY = state
	@property
	def backgroundRepeat(self):
		self._getter_access_tracker["backgroundRepeat"] = {}
		return self._backgroundRepeat
	@backgroundRepeat.setter
	def backgroundRepeat(self, state):
		self._setter_access_tracker["backgroundRepeat"] = {}
		self._backgroundRepeat = state
	@property
	def position(self):
		self._getter_access_tracker["position"] = {}
		return self._position
	@position.setter
	def position(self, state):
		self._setter_access_tracker["position"] = {}
		self._position = state
	@property
	def float(self):
		self._getter_access_tracker["float"] = {}
		return self._float
	@float.setter
	def float(self, state):
		self._setter_access_tracker["float"] = {}
		self._float = state
	@property
	def clear(self):
		self._getter_access_tracker["clear"] = {}
		return self._clear
	@clear.setter
	def clear(self, state):
		self._setter_access_tracker["clear"] = {}
		self._clear = state
	@property
	def top(self):
		self._getter_access_tracker["top"] = {}
		return self._top
	@top.setter
	def top(self, state):
		self._setter_access_tracker["top"] = {}
		self._top = state
	@property
	def left(self):
		self._getter_access_tracker["left"] = {}
		return self._left
	@left.setter
	def left(self, state):
		self._setter_access_tracker["left"] = {}
		self._left = state
	@property
	def bottom(self):
		self._getter_access_tracker["bottom"] = {}
		return self._bottom
	@bottom.setter
	def bottom(self, state):
		self._setter_access_tracker["bottom"] = {}
		self._bottom = state
	@property
	def right(self):
		self._getter_access_tracker["right"] = {}
		return self._right
	@right.setter
	def right(self, state):
		self._setter_access_tracker["right"] = {}
		self._right = state
	@property
	def zIndex(self):
		self._getter_access_tracker["zIndex"] = {}
		return self._zIndex
	@zIndex.setter
	def zIndex(self, state):
		self._setter_access_tracker["zIndex"] = {}
		self._zIndex = state
	@property
	def outlineStyle(self):
		self._getter_access_tracker["outlineStyle"] = {}
		return self._outlineStyle
	@outlineStyle.setter
	def outlineStyle(self, state):
		self._setter_access_tracker["outlineStyle"] = {}
		self._outlineStyle = state
	@property
	def outlineColor(self):
		self._getter_access_tracker["outlineColor"] = {}
		return self._outlineColor
	@outlineColor.setter
	def outlineColor(self, state):
		self._setter_access_tracker["outlineColor"] = {}
		self._outlineColor = state
	@property
	def outlineOffset(self):
		self._getter_access_tracker["outlineOffset"] = {}
		return self._outlineOffset
	@outlineOffset.setter
	def outlineOffset(self, state):
		self._setter_access_tracker["outlineOffset"] = {}
		self._outlineOffset = state
	@property
	def outlineWidth(self):
		self._getter_access_tracker["outlineWidth"] = {}
		return self._outlineWidth
	@outlineWidth.setter
	def outlineWidth(self, state):
		self._setter_access_tracker["outlineWidth"] = {}
		self._outlineWidth = state
	@property
	def cursor(self):
		self._getter_access_tracker["cursor"] = {}
		return self._cursor
	@cursor.setter
	def cursor(self, state):
		self._setter_access_tracker["cursor"] = {}
		self._cursor = state
	@property
	def boxSizing(self):
		self._getter_access_tracker["boxSizing"] = {}
		return self._boxSizing
	@boxSizing.setter
	def boxSizing(self, state):
		self._setter_access_tracker["boxSizing"] = {}
		self._boxSizing = state
	def _to_json_fields(self):
		return {
			"alignSelf": self._alignSelf,
			"flexGrow": self._flexGrow,
			"flexShrink": self._flexShrink,
			"order": self._order,
			"marginTop": self._marginTop,
			"marginBottom": self._marginBottom,
			"marginRight": self._marginRight,
			"marginLeft": self._marginLeft,
			"paddingTop": self._paddingTop,
			"paddingBottom": self._paddingBottom,
			"paddingRight": self._paddingRight,
			"paddingLeft": self._paddingLeft,
			"width": self._width,
			"height": self._height,
			"minWidth": self._minWidth,
			"minHeight": self._minHeight,
			"maxWidth": self._maxWidth,
			"maxHeight": self._maxHeight,
			"overflow": self._overflow,
			"fontFamily": self._fontFamily,
			"fontWeight": self._fontWeight,
			"fontSize": self._fontSize,
			"textAlign": self._textAlign,
			"color": self._color,
			"opacity": self._opacity,
			"fontStyle": self._fontStyle,
			"borderRadius": self._borderRadius,
			"borderWidth": self._borderWidth,
			"borderStyle": self._borderStyle,
			"borderColor": self._borderColor,
			"backgroundImage": self._backgroundImage,
			"backgroundColor": self._backgroundColor,
			"backgroundClip": self._backgroundClip,
			"backgroundOrigin": self._backgroundOrigin,
			"backgroundAttachment": self._backgroundAttachment,
			"backgroundPositionX": self._backgroundPositionX,
			"backgroundPositionY": self._backgroundPositionY,
			"backgroundRepeat": self._backgroundRepeat,
			"position": self._position,
			"float": self._float,
			"clear": self._clear,
			"top": self._top,
			"left": self._left,
			"bottom": self._bottom,
			"right": self._right,
			"zIndex": self._zIndex,
			"outlineStyle": self._outlineStyle,
			"outlineColor": self._outlineColor,
			"outlineOffset": self._outlineOffset,
			"outlineWidth": self._outlineWidth,
			"cursor": self._cursor,
			"boxSizing": self._boxSizing,
			}


class ImagecustomClass:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state

		self.alt: str = get_defined_value(state, def_state, "alt")
		self.src: str = get_defined_value(state, def_state, "src")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def alt(self):
		self._getter_access_tracker["alt"] = {}
		return self._alt
	@alt.setter
	def alt(self, state):
		self._setter_access_tracker["alt"] = {}
		self._alt = state
	@property
	def src(self):
		self._getter_access_tracker["src"] = {}
		return self._src
	@src.setter
	def src(self, state):
		self._setter_access_tracker["src"] = {}
		self._src = state
	def _to_json_fields(self):
		return {
			"alt": self._alt,
			"src": self._src,
			}


class Image:
	def __init__(self, state, def_state):
		self._setter_access_tracker = {}
		self._def_state = def_state
		self.onClick = False
		self.styles: ImagestylesClass = get_defined_value(state, def_state, "styles")
		self.custom: ImagecustomClass = get_defined_value(state, def_state, "custom")
		self._setter_access_tracker = {}
		self._getter_access_tracker = {}

	@property
	def styles(self):
		self._getter_access_tracker["styles"] = {}
		return self._styles
	@styles.setter
	def styles(self, state):
		self._setter_access_tracker["styles"] = {}
		self._styles = ImagestylesClass(state, self._def_state["styles"])
	@property
	def custom(self):
		self._getter_access_tracker["custom"] = {}
		return self._custom
	@custom.setter
	def custom(self, state):
		self._setter_access_tracker["custom"] = {}
		self._custom = ImagecustomClass(state, self._def_state["custom"])
	def _to_json_fields(self):
		return {
			"styles": self._styles,
			"custom": self._custom,
			}

