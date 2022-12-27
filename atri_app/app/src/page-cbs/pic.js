import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useImage439Cb() {
	const onClick = useCallback(callbackFactory("Image439", "pic", "/pic", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useOverlay6Cb() {

	return {  }
}